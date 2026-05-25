package com.example.medicineordering.exception;

public class PrescriptionValidationException
        extends RuntimeException {

    public PrescriptionValidationException(
            String message
    ) {

        super(message);
    }
}