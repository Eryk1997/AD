package recrutation.validator.availability;

public interface AvailabilityValidator<T> {
    String validate(T value);
}
