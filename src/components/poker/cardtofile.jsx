
export default function CardTofFile(code) {
    const valueMap = {
        "A": "ace",
        "K": "king",
        "Q": "queen",
        "J": "jack",
        "T": "10",
        "9": "9",
        "8": "8",
        "7": "7",
        "6": "6",
        "5": "5",
        "4": "4",
        "3": "3",
        "2": "2",
    };

    const suitMap = {
        "C": "clubs",
        "D": "diamonds",
        "H": "hearts",
        "S": "spades",
    };

    const value = code[0];
    const suit = code[1];


  return `/cards/${valueMap[value]}_of_${suitMap[suit]}.svg`;
}
