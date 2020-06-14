module.exports = {
  percentage(value) {
    value = new Intl.NumberFormat('pt-BR').format(value.toFixed(4));
    value = value.replace(/0{1,2}$/, '');
  },
  cpf(value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/g, '$1.$2');
    value = value.replace(/(\d{3})(\d)/g, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})/, '$1-$2');
    value = value.replace(/(-\d{2})\d+?$/, '$1');

    return value;
  }
}
