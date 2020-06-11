function App() {
  function render(component, element) {
    try {
      element.innerHTML = component;
    } catch(err) {
      throw new Error('Cannot possible create first element');
    } 
  }

  return render;
}

export default App();