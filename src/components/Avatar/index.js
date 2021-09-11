import React from "react";

export default function Avatar(props) {
    const { image, avatarname, avatarnim } = props;

    return (
      <div
        class="flex items-center justify-center bg-blue-50"
        style={{ height: "100vh" }}
      >
        <div class="flex space-x-0 overflow-hidden">
  <img src={image} alt="Gambar"
  class="inline-block h-10 w-10 rounded-full ring-2 ring-white"/> 
  <div class="text-sm font-medium text-black">
  <dl>
  <dt>{avatarname}</dt>
  <dt>{avatarnim}</dt>
  </dl></div> 
</div>
</div>
);
}