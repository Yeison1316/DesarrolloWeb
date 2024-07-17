export function getBookingDetails(id) {
    const bookingDetails = localStorage.getItem(id);
    return bookingDetails ? JSON.parse(bookingDetails) : null;
}
