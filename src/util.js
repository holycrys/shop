export const formatCurrency = (num) => {
    return "Lei" + Number.parseFloat(num).toFixed(2).toLocaleString() + " "
}