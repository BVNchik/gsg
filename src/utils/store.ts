import CryptoJS from "crypto-js";

import { secretToken } from "config";

const API_TOKEN_KEY = "api-token";
const SELECTED_PROJECT = "selected-project";
const PROJECTS = "projects";

export function setApiToken(apiToken?: string): void {
  if (!apiToken) return removeApiToken();
  const encryptApiToken = CryptoJS.AES.encrypt(
    apiToken,
    secretToken
  ).toString();
  localStorage.setItem(API_TOKEN_KEY, encryptApiToken);
}

export function removeApiToken(): void {
  localStorage.removeItem(API_TOKEN_KEY);
}

export function getApiToken(): string | null {
  const apiToken = localStorage.getItem(API_TOKEN_KEY);
  if (!apiToken) return null;
  return CryptoJS.AES.decrypt(apiToken, secretToken).toString(
    CryptoJS.enc.Utf8
  );
}

export function getSelectedProject(): string {
  const project = localStorage.getItem(SELECTED_PROJECT) || "null";
  return JSON.parse(project);
}

export function setSelectedProject(project: string): void {
  localStorage.setItem(SELECTED_PROJECT, JSON.stringify(project));
}

export function getProjects(): string[] {
  const projects = localStorage.getItem(PROJECTS) || "null";
  return JSON.parse(projects) || [""];
}

export function setProjects(projects: string[]): void {
  localStorage.setItem(PROJECTS, JSON.stringify(projects));
}
