import { action, makeObservable, observable } from "mobx";
import AppRepository from "../data/app_repository";

export default class BaseStore {
  constructor() {
    this.appRepository = new AppRepository();
    makeObservable(this, {
      loading: observable,
      error: observable,
      handleError: action,
      handleResponse: action,
    });
  }

  loading: boolean = false;
  error: any;
  appRepository: AppRepository;

  handleResponse() {
    console.log("handleResponse");
  }

  handleError() {}
}
