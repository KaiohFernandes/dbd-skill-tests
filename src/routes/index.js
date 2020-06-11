import routes from './routes';

function Routes(App, element) {
  function render(view) {
    App(view, element)
  }

  function listen() {
    window.addEventListener('hashchange', event => {
      const newURL = event.newURL || ''; 
      const route = newURL.replace(/.*#\//g, '');

      const currentRoute = routes(route);
      render(currentRoute);
    });
  }

  function initialRoute() {
    const newURL = window.location.href;
    const route = newURL.replace(/.*#\//g, '');

    const currentRoute = routes(route);
    render(currentRoute);
  }

  initialRoute();
  listen();

  return {
    listen
  }
}

export default Routes;