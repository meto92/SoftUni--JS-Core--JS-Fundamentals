function letterOccurrences(str, letter) {
    return Array.from(str).filter(ch => ch == letter).length;
}