// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData

interface UserData {
  nome?: string;
  email?: string;
  cpf?: string;
}

interface Window {
  userData: any;
}

function isUserData(data: unknown): data is UserData {
  return (
    data !== null &&
    typeof data === 'object' &&
    'nome' in data &&
    'email' in data &&
    'cpf' in data
  );
}

function validJSON(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

const form = document.getElementById('form') as HTMLFormElement;
window.userData = {};

function handleInputForm(event: KeyboardEvent) {
  const { id, value } = event.target as HTMLInputElement;
  window.userData[id] = value;
  localStorage.setItem('userData', JSON.stringify(window.userData));
}

function handlePageLoad() {
  const localStorageData = localStorage.getItem('userData');
  if (localStorageData && validJSON(localStorageData)) {
    const userData = JSON.parse(localStorageData);
    if (isUserData(userData)) {
      Object.entries(userData).forEach(([key, value]) => {
        const input = document.getElementById(key);
        if (input instanceof HTMLInputElement) {
          input.value = value;
          window.userData[key] = value;
        }
      });
    }
  }
}

form.addEventListener('keyup', handleInputForm);

window.addEventListener('load', handlePageLoad);