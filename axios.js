const getbtn = document.querySelector('.getbtn')
const teste = document.querySelector('.botaoteste')
const loading = document.querySelector('.loading')
const text = document.querySelector('.text')
const message = document.querySelector('.message')

const getData = () => {

  changeText()

  axios.get('http://localhost:8080/people', { responseType: 'arraybuffer' }).then(response => {
    const file = new Blob(
      [response.data],
      { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);

    text.textContent = "Gerar Novamente"
    loading.style.display = "none"
    message.style.display = "block"
    getbtn.style.pointerEvents = "auto"
    
  });

}

const changeText = () =>{

  setTimeout(() => {

    getbtn.style.pointerEvents = "none";
    message.style.display = "none"
    loading.style.display = "inline"
    text.textContent = "Fazendo requizição..."
  }, 300);
  setTimeout(() => {
    
    text.textContent = "Baixando dados..."
  }, 3300);
  setTimeout(() => {
    
    text.textContent = "Gerando PDF..."
  }, 8000);

}