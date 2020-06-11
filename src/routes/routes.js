import SkillTest from '../pages/SkillTest';
import NotFound from '../pages/NotFound'


export default function get(route) {
  const routes = {
    '': SkillTest
  };

  return routes[route] || NotFound;
}