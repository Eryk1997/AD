package recrutation.validator.attributes;

public interface Validator<T> {
    String validate(T value);
}
