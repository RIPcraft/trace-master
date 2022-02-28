import Vue from 'vue';
import Vuex from 'vuex';
import { Point } from '../components/geometry/Point';
// import { Segment } from '../components/geometry/Segment';

Vue.use(Vuex);

export default function () {
  const dots = [
    new Point({ x: 100, y: 100 }),
    new Point({ x: 120, y: 200 }),
    new Point({ x: 200, y: 90 }),
    new Point({ x: 190, y: 240 }),
    new Point({ x: 140, y: 150 }),
    new Point({ x: 90, y: 270 }),
  ];

  // const segments = [
  //   new Segment(dots[0], dots[1]),
  //   new Segment(dots[1], dots[2]),
  //   new Segment(dots[4], dots[5]),
  // ];

  const Store = new Vuex.Store({
    state: {
      tools: [],
      dots,
      // segments,
    },
    getters: {

    },
    mutations: {
      moveDot(dot, movement) {
        dot.origin.drag(movement);
      },
    },
    actions: {

    },
  });

  return Store;
}
