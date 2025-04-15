export const convertDistrict = (input: string): string => {
    if (!input) return ""

    const romanToArabic: Record<string, number> = {
      "I": 1, "II": 2, "III": 3, "IV": 4, "V": 5,
      "VI": 6, "VII": 7, "VIII": 8, "IX": 9,
      "X": 10, "XI": 11, "XII": 12, "XIII": 13,
      "XIV": 14, "XV": 15, "XVI": 16, "XVII": 17,
      "XVIII": 18, "XIX": 19, "XX": 20, "XXI": 21,
      "XXII": 22, "XXIII": 23,
    }
  
    const parts = input.trim().split(" ");
    if (parts.length === 2 && parts[0].toLowerCase() === "district") {
      const number = romanToArabic[parts[1].toUpperCase()]
      return number ? `${number}th District` : input
    }
  
    return input
  }