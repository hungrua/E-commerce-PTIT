export const formatCurrency = (value) => {
    if (typeof value !== 'number') {
      return value; // Trả về giá trị gốc nếu không phải là số
    }

    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    });

    const formattedValue = formatter.format(value);

    return formattedValue.replace(/₫/g, 'đ');
  }