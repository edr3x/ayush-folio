function textCopy() {
    const add = ["ayush.dhungana17", "gmail.com"].join("@");
    navigator.clipboard.writeText(add);
    alert("Copied e-mail address to clipboard");
}
