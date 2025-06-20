/**
 * 引数の月初を返す関数
 * @param date 
 * @returns 
 */
export const getStartOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
};


/**
 * 2つのDate型が同じ年月日であるか比較する関数
 * @param date1 
 * @param date2 
 * @returns 
 */
export const isSameDay = (date1: Date, date2: Date) => {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
  );
}