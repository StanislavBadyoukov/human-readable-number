module.exports = function toReadable (number) {
    if (number === 0) {return 'zero'}
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    
    const arrOfDozens  = ['zero', 'zero',
        'twenty', 'thirty', 'forty', 'fifty', 'sixty',
        'seventy', 'eighty', 'ninety']
    
    let result = '';
    
    const numberOfHundreds = Math.floor(number/100);
    if (numberOfHundreds !== 0) {
        result = `${arr[numberOfHundreds]} hundred`;
    }
    
    const newNumber = number%100;
    
    if (newNumber === 0)  {return result}
    
    if (newNumber < 20) {
        result = `${result} ${arr[newNumber]}`;
        }
         else {
            numberOfDozens = Math.floor(newNumber/10);
            result = `${result} ${arrOfDozens[numberOfDozens]}`
    
            const numberOfUnits = newNumber%10;
    
            if (numberOfUnits !== 0) {
            result = `${result} ${arr[numberOfUnits]}`;
            }
         }
    
    return result.trim()
    }