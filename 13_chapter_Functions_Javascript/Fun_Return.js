function validateStatusCode(status) {
    if (status >= 200 && status < 300) {
        return "Success";
    } else if (status >= 400 && status < 500) {
        return "Client error";
    }
    else if (status >= 500 ) {
        return "Server error";
    }
    else {
        return "Unknown"
    }
}
console.log(validateStatusCode(200))
console.log(validateStatusCode(404))
console.log(validateStatusCode(500))

