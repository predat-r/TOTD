export function formatLikes(likes:number):string {
    if (likes >= 1000000) {
        return (likes / 1000000).toFixed(1) + 'M'; // For millions
    } else if (likes >= 1000) {
        return (likes / 1000).toFixed(1) + 'K'; // For thousands
    } else {
        return likes.toString(); // return as it is
    }
}

