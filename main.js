const $ = document.querySelector.bind(document)

const floorCalculation = (event) => {
    event.preventDefault()

   const Width = toFloat('Width')
   const Length = toFloat("Length")
   const floorValue = toFloat("floor-type")

    const area = Width * Length
    const purchaseValue = area * floorValue
    
    $('#result').innerText = `Quantidade de pisos para comprar = ${area.toFixed(0)}\n Valor da compra = R$ ${purchaseValue} reais`
}

const toFloat = (id) => {
    let aux = $(`#${id}`).value
    const value = parseFloat(aux)
    return value
}