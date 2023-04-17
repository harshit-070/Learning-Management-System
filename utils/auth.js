import Cookies from "js-cookie";
import Router from "next/router";

export const handleLogin = async (t, routeNext) => {
  console.log(t);
  const response = Cookies.set("edmy_users_token", t);
  console.log(response);
  if (routeNext.query && routeNext.query.next) {
    Router.push(routeNext.query.next);
  } else {
    Router.push("/");
  }
};

export const handleLogout = () => {
  Cookies.remove("edmy_users_token");
  Router.push("/");
};

export const destroyCookie = () => {
  Cookies.remove("edmy_users_token");
  Router.reload("/");
};

export const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push({ pathname: location, query: { next: ctx.pathname } });
  }
};

export const slugify = (string) => {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};
