package com.example.medicineordering.controller;

import com.example.medicineordering.dto.AddCartItemRequest;

import com.example.medicineordering.dto.UpdateCartItemRequest;

import com.example.medicineordering.dto.CartResponse;

import com.example.medicineordering.service.CartService;

import com.example.medicineordering.service.CurrentUserService;

import jakarta.servlet.http.HttpServletRequest;

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

    private final
    CurrentUserService
    currentUserService;

    /* ADD TO CART */

    @PostMapping("/add")

    public CartResponse addToCart(

            @RequestBody
            AddCartItemRequest request,

            HttpServletRequest httpRequest
    ) {

        return cartService
                .addToCart(
                        currentUserService
                                .getCurrentUserId(
                                        httpRequest
                                ),
                        request
                );
    }

    /* GET CART */

    @GetMapping

    public CartResponse getCart(
            HttpServletRequest request
    ) {

        return cartService
                .getCart(
                        currentUserService
                                .getCurrentUserId(
                                        request
                                )
                );
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
            UpdateCartItemRequest request,

            HttpServletRequest httpRequest
    ) {

        return cartService
                .updateCartItem(

                        currentUserService
                                .getCurrentUserId(
                                        httpRequest
                                ),

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
