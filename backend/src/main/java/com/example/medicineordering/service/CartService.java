package com.example.medicineordering.service;

import com.example.medicineordering.dto.AddCartItemRequest;

import com.example.medicineordering.dto.UpdateCartItemRequest;

import com.example.medicineordering.dto.CartItemResponse;

import com.example.medicineordering.dto.CartResponse;

import com.example.medicineordering.entity.Cart;

import com.example.medicineordering.entity.CartItem;

import com.example.medicineordering.entity.Medicine;

import com.example.medicineordering.repository.CartItemRepository;

import com.example.medicineordering.repository.CartRepository;

import com.example.medicineordering.repository.MedicineRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import java.util.List;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor

public class CartService {

    private final
    CartRepository cartRepository;

    private final
    CartItemRepository cartItemRepository;

    private final
    MedicineRepository medicineRepository;

    /* ADD TO CART */

    public CartResponse addToCart(

            Long userId,

            AddCartItemRequest request
    ) {

        Cart cart =
                getOrCreateCart(userId);

        Medicine medicine =
                medicineRepository
                        .findById(
                                request.getMedicineId()
                        )

                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Medicine Not Found"
                                )
                        );

        CartItem cartItem =
                CartItem.builder()

                .cart(cart)

                .medicine(medicine)

                .quantity(
                        request.getQuantity()
                )

                .subtotal(
                        medicine.getPrice()
                        * request.getQuantity()
                )

                .build();

        cartItemRepository.save(
                cartItem
        );

        return getCart(userId);
    }

    /* GET CART */

    public CartResponse getCart(
            Long userId
    ) {

        Cart cart =
                getOrCreateCart(userId);

        List<CartItem> cartItems =
                cartItemRepository
                        .findByCartId(
                                cart.getId()
                        );

        List<CartItemResponse>
                itemResponses =

                cartItems.stream()

                .map(item ->

                        CartItemResponse
                                .builder()

                                .id(
                                        item.getId()
                                )

                                .medicineName(
                                        item.getMedicine()
                                                .getName()
                                )

                                .quantity(
                                        item.getQuantity()
                                )

                                .price(
                                        item.getMedicine()
                                                .getPrice()
                                )

                                .subtotal(
                                        item.getSubtotal()
                                )

                                .build()
                )

                .collect(Collectors.toList());

        Double totalAmount =
                itemResponses.stream()

                .mapToDouble(
                        CartItemResponse
                                ::getSubtotal
                )

                .sum();

        return CartResponse
                .builder()

                .cartId(
                        cart.getId()
                )

                .cartItems(
                        itemResponses
                )

                .totalAmount(
                        totalAmount
                )

                .build();
    }

    /* UPDATE CART ITEM */

    public CartResponse
    updateCartItem(

            Long userId,

            Long cartItemId,

            UpdateCartItemRequest request
    ) {

        CartItem cartItem =
                cartItemRepository
                        .findById(cartItemId)

                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Cart Item Not Found"
                                )
                        );

        cartItem.setQuantity(
                request.getQuantity()
        );

        cartItem.setSubtotal(

                cartItem.getMedicine()
                        .getPrice()

                * request.getQuantity()
        );

        cartItemRepository.save(
                cartItem
        );

        return getCart(userId);
    }

    /* REMOVE CART ITEM */

    public void removeCartItem(
            Long cartItemId
    ) {

        cartItemRepository
                .deleteById(cartItemId);
    }

    /* HELPER METHOD */

    private Cart getOrCreateCart(
            Long userId
    ) {

        return cartRepository
                .findByUserIdAndIsActive(
                        userId,
                        true
                )

                .orElseGet(() -> {

                    Cart newCart =
                            Cart.builder()

                            .userId(userId)

                            .isActive(true)

                            .createdAt(
                                    LocalDateTime.now()
                            )

                            .build();

                    return cartRepository
                            .save(newCart);
                });
    }
}