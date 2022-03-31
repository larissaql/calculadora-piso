const $ = document.querySelector.bind(document)

const floorCalculation = (event) => {
    event.preventDefault()

   const Width = toFloat('Width')
   const Length = toFloat("Length")
   const floorValue = toFloat("floor-type")

    const area = Width * Length
    const purchaseValue = area * floorValue
    
    $('#result').innerText = `Quantidade de pisos (área) = ${area.toFixed(0)} m²\n Valor da compra = R$ ${purchaseValue} reais`
}

const toFloat = (id) => {
    let aux = $(`#${id}`).value
    const value = parseFloat(aux)
    return value
}