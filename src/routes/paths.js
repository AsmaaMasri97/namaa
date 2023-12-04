// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}
const ROOTS_AUTH = "/auth";
// ----------------------------------------------------------------------
export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
  verify: path(ROOTS_AUTH, "/verify"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
  newPassword: path(ROOTS_AUTH, "/new-password"),
};
const ROOTS_DASHBOARD = "/dashboard";
export const PATH_PAGE = {
  payment: "/payment",
  about: "/about-us",
  contact: "/contact-us",
  faqs: "/faqs",
  page403: "/403",
  page404: "/404",
  page500: "/500",
};
export const PATH_DASHBOARD = {
  overview: "/overview",
  users: "/users",
  branches: "/branches",
  performance: "/performance",
  finance: "/finance",
  rank: "/rank",
  opportunity_center: "/opportunity_center",
  account_settings: "/account_settings",
  help: "/help",
  log_out: "/log_out",
  menu: "/menu",
  profile_employee:"/profile-employee",
  opportunity_center_employee:"/opportunity-center-employee",
  //m start
  user:"/user",
  finance: "/finance-employee",
  contact_us:"/contact-us-employee"
};
export const PATH_EMPLOYEE = {
  home: "/home",
  menu: "/menu",
  store: "/store",
  orders: "/orders",
  opportunities: "/opportunities",
  opportunity_center: "/opportunity_center",
  attendance_enhancer: "/attendance_enhancer",
  inbox: "/inbox",
  rank: "/rank",
  finance: "/finance",
  account_settings: "/account_settings",
  help: "/help",
  log_out: "/log_out",
};
