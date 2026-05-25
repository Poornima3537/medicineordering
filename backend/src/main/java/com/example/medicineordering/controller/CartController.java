package com.example.medicineordering.controller;

import com.example.medicineordering.dto.AddCartItemRequest;

import com.example.medicineordering.dto.UpdateCartItemRequest;

import com.example.medicineordering.dto.CartResponse;

import com.example.medicineordering.service.CartService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/api/cart")

@RequiredArgsConstructor

@CrossOrigin("*")

public class CartController {

    private final
    CartService
    cartService;

    /*
       TEMP USER ID
       Later JWT integration
       will replace this
    */

    private final Long USER_ID = 1L;

    /* ADD TO CART */

    @PostMapping("/add")

    public CartResponse addToCart(

            @RequestBody
            AddCartItemRequest request
    ) {

        return cartService
                .addToCart(
                        USER_ID,
                        request
                );
    }

    /* GET CART */

    @GetMapping

    public CartResponse getCart() {

        return cartService
                .getCart(USER_ID);
    }

    /* UPDATE CART ITEM */

    @PutMapping(
            "/update/{cartItemId}"
    )

    public CartResponse
    updateCartItem(

            @PathVariable
            Long cartItemId,

            @RequestBody
            UpdateCartItemRequest request
    ) {

        return cartService
                .updateCartItem(

                        USER_ID,

                        cartItemId,

                        request
                );
    }

    /* REMOVE CART ITEM */

    @DeleteMapping(
            "/remove/{cartItemId}"
    )

    public String removeCartItem(

            @PathVariable
            Long cartItemId
    ) {

        cartService
                .removeCartItem(
                        cartItemId
                );

        return "Cart Item Removed";
    }
}