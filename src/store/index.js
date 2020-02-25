import Vue from 'vue';
import Vuex from 'vuex';
import { Point } from '../components/geometry/Point';
import { Segment } from '../components/geometry/Segment';

Vue.use(Vuex);

export default function () {
  const dots = [
    new Point(100, 100),
    new Point(120, 200),
    new Point(200, 90),
    new Point(190, 240),
    new Point(140, 150),
    new Point(90, 270),
  ];

  const segments = [
    new Segment(dots[0], dots[1]),
    new Segment(dots[1], dots[2]),
    new Segment(dots[4], dots[5]),
  ];

  const Store = new Vuex.Store({
    state: {
      tools: [],
      dots,
      segments,
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
