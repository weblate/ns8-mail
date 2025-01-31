//
// Copyright (C) 2022 Nethesis S.r.l.
// SPDX-License-Identifier: GPL-3.0-or-later
//
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appName: "Mail",
    instanceName: "",
    instanceLabel: "",
    core: null,
    isAppConfigured: true,
    configuration: null,
  },
  mutations: {
    setInstanceName(state, instanceName) {
      state.instanceName = instanceName;
    },
    setInstanceLabel(state, instanceLabel) {
      state.instanceLabel = instanceLabel;
    },
    setCore(state, core) {
      state.core = core;
    },
    setAppConfigured(state, value) {
      state.isAppConfigured = value;
    },
    setConfiguration(state, configuration) {
      state.configuration = configuration;
    },
  },
  actions: {
    setInstanceNameInStore(context, instanceName) {
      context.commit("setInstanceName", instanceName);
    },
    setInstanceLabelInStore(context, instanceLabel) {
      context.commit("setInstanceLabel", instanceLabel);
    },
    setCoreInStore(context, core) {
      context.commit("setCore", core);
    },
    setAppConfiguredInStore(context, value) {
      context.commit("setAppConfigured", value);
    },
    setConfigurationInStore(context, configuration) {
      context.commit("setConfiguration", configuration);
    },
  },
  modules: {},
});
