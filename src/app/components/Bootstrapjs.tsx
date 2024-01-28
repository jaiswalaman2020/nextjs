"use client";
import { useEffect } from "react";
function bootstrap() {
  useEffect(() => {
    //Bootstrap js
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}

export default bootstrap;
