function verifyCoupon() {
    var coupon = document.getElementById("coupon").value;
    var result = document.getElementById("result1");

    // List of valid coupon codes
    var validCoupons = ["JAVATPOINT10", "JAVATPOINT20", "JAVATPOINT30"];

    if (validCoupons.includes(coupon)) {
        result.innerHTML = "Coupon code is valid!";
    } else {
        result.innerHTML = "Coupon code is not valid!";
    }
}