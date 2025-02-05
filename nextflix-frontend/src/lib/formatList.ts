export const formatList = (items?: { name: string }[], fallback = "-") => {
    return items && items.length > 0 ? items.map((item) => item.name).join(", ") : fallback;
};