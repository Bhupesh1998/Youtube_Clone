import React from "react";
import { Link } from "react-router";

const navItems = [
  { label: "Home", icon: "home", path: "/" },
  { label: "Shorts", icon: "shorts" },
  { label: "Subscriptions", icon: "subscriptions" },
];

const youItems = [
  { label: "Your channel", icon: "channel" },
  { label: "History", icon: "history" },
  { label: "Playlists", icon: "playlist" },
  { label: "Your videos", icon: "yourvideos" },
  { label: "Watch later", icon: "watchlater" },
  { label: "Liked videos", icon: "liked" },
];

const exploreItems = [
  { label: "Trending", icon: "trending" },
  { label: "Shopping", icon: "shopping" },
  { label: "Music", icon: "music" },
  { label: "Movies", icon: "movies" },
  { label: "Live", icon: "live" },
  { label: "Gaming", icon: "gaming" },
  { label: "News", icon: "news" },
  { label: "Sports", icon: "sports" },
];

const moreItems = [
  { label: "YouTube Premium", icon: "premium" },
  { label: "YouTube Studio", icon: "studio" },
  { label: "YouTube Music", icon: "music" },
  { label: "YouTube Kids", icon: "kids" },
];

const settingsItems = [
  { label: "Settings", icon: "settings" },
  { label: "Report history", icon: "report" },
  { label: "Help", icon: "help" },
  { label: "Send feedback", icon: "feedback" },
];

const icons = {
  home: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3.5a.75.75 0 0 0-.53.22l-8 8a.75.75 0 0 0 1.06 1.06L12 5.06l7.47 7.47a.75.75 0 1 0 1.06-1.06l-8-8A.75.75 0 0 0 12 3.5Z" />
      <path d="M12 8.75a.75.75 0 0 1 .75.75v10.25a.75.75 0 0 1-1.5 0V9.5a.75.75 0 0 1 .75-.75Z" />
    </svg>
  ),
  shorts: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.38 2.68a1.25 1.25 0 0 0-2.76 0l-.64 5.4a.25.25 0 0 1-.46.12L6.6 4.9a1.25 1.25 0 0 0-2.2 1.18l2.6 5.3a.25.25 0 0 1-.24.36h-5.5a1.25 1.25 0 0 0 0 2.5h5.5a.25.25 0 0 1 .24.36l-2.6 5.3a1.25 1.25 0 0 0 2.2 1.19l2.93-3.3a.25.25 0 0 1 .46.12l.64 5.4a1.25 1.25 0 0 0 2.76 0l.64-5.4a.25.25 0 0 1 .46-.12l2.92 3.3a1.25 1.25 0 0 0 2.2-1.19l-2.6-5.3a.25.25 0 0 1 .24-.36h5.5a1.25 1.25 0 0 0 0-2.5h-5.5a.25.25 0 0 1-.24-.36l2.6-5.3a1.25 1.25 0 0 0-2.2-1.18l-2.92 3.3a.25.25 0 0 1-.46-.12l-.64-5.4Z" />
    </svg>
  ),
  subscriptions: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 18.5a1 1 0 0 1-.5-.13A1 1 0 0 1 9 17.5v-11a1 1 0 0 1 1.5-.87l8.5 5.5a1 1 0 0 1 0 1.74l-8.5 5.5a1 1 0 0 1-.5.13Z" />
    </svg>
  ),
  channel: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  ),
  history: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm-.5-13v5.29l4.5 2.67.5-.87-4-2.35V7h-1Z" />
    </svg>
  ),
  playlist: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15 6H3v2h12V6Zm0 4H3v2h12v-2ZM3 16h8v-2H3v2ZM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5Z" />
    </svg>
  ),
  yourvideos: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6Zm16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-3 7-6 3.5V7l6 3.5Z" />
    </svg>
  ),
  watchlater: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm-.5-13v5.29l4.5 2.67.5-.87-4-2.35V7h-1Z" />
    </svg>
  ),
  liked: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
    </svg>
  ),
  trending: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 9.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm4.7 2.36a6.97 6.97 0 0 0-1.2-2.86l-1.5 1.5c.32.43.55.93.67 1.47.15.66.12 1.33-.07 1.97l1.41.82c.43-.9.5-1.93.04-2.87l3.15-3.15a.75.75 0 0 0 .16-.82.75.75 0 0 0-.7-.46H17.5a.75.75 0 0 0 0 1.5h1.05l-2.07 2.07a7.33 7.33 0 0 0-.46-1.3l.25-.25A2.19 2.19 0 0 0 16 6.81V5a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V11.7a7.33 7.33 0 0 0-.05-.58l.17-.17.49.49a.75.75 0 0 0 1.06 0l.42-.43a.75.75 0 0 0 0-1.06l-2.42-2.42.3-.3a.75.75 0 0 0 .17-.78.75.75 0 0 0-.7-.47H8a.75.75 0 0 0 0 1.5h1.5v10a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v4a.75.75 0 0 0 1.5 0v-3.56c0-.16-.02-.32-.06-.47Z" />
    </svg>
  ),
  shopping: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2ZM7.17 14.75l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01A.996.996 0 0 0 20.25 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.45A2.002 2.002 0 0 0 7 18h12v-2H7.42c-.14 0-.25-.11-.25-.25Z" />
    </svg>
  ),
  music: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6Z" />
    </svg>
  ),
  movies: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 4v1h-2V4H8v1H6V4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM6 7.5h12V9H6V7.5Zm0 3h12v1.5H6v-1.5Zm0 3h12v1.5H6v-1.5Z" />
    </svg>
  ),
  live: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.57 2.05A9.94 9.94 0 0 0 8.29 3.1l1.2 1.6a7.98 7.98 0 0 1 2.52-.76c2.9-.3 5.73.6 7.9 2.47l1.2-1.6a10.04 10.04 0 0 0-4.23-2.08 10.4 10.4 0 0 0-5.31-.68Zm-5.77 4.1a9.94 9.94 0 0 0-1.05 2.65l1.93.5a7.98 7.98 0 0 1 .73-1.93l-1.6-1.22Zm15.42 2.9-.3 4.83c-.05.8-.24 1.58-.59 2.3a7.97 7.97 0 0 1-2.32 3.08c-2.6 2.1-6.34 2.23-9.09.4l-1.2 1.6a9.96 9.96 0 0 0 11.58-.75 10.1 10.1 0 0 0 2.92-9.63l-1.94-.5.44-6.96h2V6.5l-2.5.55Z" />
    </svg>
  ),
  gaming: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.58 16.09 20.47 12a3.68 3.68 0 0 0-3.36-2.5h-.33a.6.6 0 0 1-.47-.24.59.59 0 0 1-.12-.51l.63-2.2a1.5 1.5 0 0 0-1.43-1.9H8.62a1.5 1.5 0 0 0-1.45 1.1l-.68 2.77a.59.59 0 0 1-.15.51.6.6 0 0 1-.47.24h-.25A3.68 3.68 0 0 0 3.5 12l-1.1 4.09A3.4 3.4 0 0 0 5.7 20a3.18 3.18 0 0 0 2.6-1.35l1.19-1.6a1.18 1.18 0 0 1 .96-.5h3.11a1.18 1.18 0 0 1 .96.5l1.19 1.6A3.18 3.18 0 0 0 18.3 20a3.4 3.4 0 0 0 3.28-3.91ZM9.5 12.5a.5.5 0 0 1-.5.5h-1v1a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-1h-1a.5.5 0 0 1-.5-.5V12a.5.5 0 0 1 .5-.5h1v-1a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v1h1a.5.5 0 0 1 .5.5v.5Zm5.5.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm2-1.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM16 10.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm2 1.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
    </svg>
  ),
  news: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.18 2.02a9.93 9.93 0 0 0-5.1 2.1l1.2 1.6a7.95 7.95 0 0 1 3.9-1.55l-.04-2.14.04-.01Zm2.54.06-.1 2.14a7.99 7.99 0 0 1 3.81 1.66l1.23-1.58A9.94 9.94 0 0 0 13.72 2.1v-.02ZM4.37 7.16a9.95 9.95 0 0 0-1.43 3.77l2.07.5a7.98 7.98 0 0 1 1.09-2.88L4.37 7.16Zm17.05 3.8-2.07.5a8.04 8.04 0 0 1-1.26 2.72l1.56 1.36c.7-.95 1.2-2.05 1.45-3.23l.33-.85-.01-.5ZM11.9 22.04c.38 0 .76 0 1.13-.04l-.04-2.14a8.9 8.9 0 0 1-2.22 0l-.07 2.14c.4.02.8.04 1.2.04Zm-3.4-.5-.46-2.1a8.1 8.1 0 0 1-2.56-1.25l-1.2 1.6c.92.7 1.97 1.2 3.1 1.5l1.14.25-.02.02Zm8.86-1.88-1.22-1.58a8.08 8.08 0 0 1-2.74 1.31l.45 2.1a9.93 9.93 0 0 0 3.2-1.55l.31-.28Z" />
    </svg>
  ),
  sports: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.3 10.5a1 1 0 0 1-.7-.3 1 1 0 0 1 0-1.4l1.8-1.8a1 1 0 0 1 1.4 1.4l-1.8 1.8a1 1 0 0 1-.7.3ZM7.3 10.5a1 1 0 0 1-.7-.3L4.8 8.4a1 1 0 0 1 1.4-1.4l1.8 1.8a1 1 0 0 1 0 1.4 1 1 0 0 1-.7.3ZM12 22.5A10.5 10.5 0 1 1 12 1.5a10.5 10.5 0 0 1 0 21Zm0-3a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm0-4a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
    </svg>
  ),
  premium: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.53 21.25c-.4 0-.79-.16-1.07-.46a1.5 1.5 0 0 1-.35-1.5l1.48-4.72-3.94.04a1.5 1.5 0 0 1-1.13-2.5l4.52-5.16c.31-.35.76-.54 1.23-.52.48.02.92.25 1.2.62l3.2 4.28 3.72-1.43a1.5 1.5 0 0 1 1.95.76c.27.6.13 1.3-.34 1.74l-9.24 8.3c-.33.29-.75.45-1.19.45h-.04Z" />
    </svg>
  ),
  studio: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6Zm16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-3 7-6 3.5V7l6 3.5Z" />
    </svg>
  ),
  kids: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 6H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm-7 6-5 3V9l5 3Z" />
    </svg>
  ),
  settings: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58ZM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2Z" />
    </svg>
  ),
  report: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Zm-6 10H6v-2h8v2Zm4-4H6v-2h12v2Z" />
    </svg>
  ),
  help: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 17h-2v-2h2v2Zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25Z" />
    </svg>
  ),
  feedback: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 14H5.17L4 17.17V4h16v12Z" />
    </svg>
  ),
};

const SidebarSection = ({ label, items }) => (
  <>
    <div className="px-3 pt-4 pb-2">
      <span className="text-sm font-semibold text-gray-900">{label}</span>
    </div>
    {items.map((item) => (
      <SidebarItem key={item.label} item={item} />
    ))}
  </>
);

const SidebarItem = ({ item }) => {
  const isHome = item.label === "Home" && item.path === "/";
  const content = (
    <div
      className={`flex items-center gap-4 px-3 py-2 mx-2 rounded-lg cursor-pointer text-sm ${
        isHome
          ? "bg-gray-100 font-semibold text-gray-900"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <span className="flex-shrink-0">{icons[item.icon]}</span>
      <span className="truncate">{item.label}</span>
    </div>
  );

  if (item.path) {
    return <Link to={item.path}>{content}</Link>;
  }
  return content;
};

function Sidebar() {
  return (
    <div className="h-full overflow-y-auto scrollbar-hide bg-white border-r border-gray-200 pb-4">
      <div className="pt-2">
        {navItems.map((item) => (
          <SidebarItem key={item.label} item={item} />
        ))}
      </div>
      <hr className="mx-3 my-3 border-gray-200" />
      <SidebarSection label="You" items={youItems} />
      <hr className="mx-3 my-3 border-gray-200" />
      <SidebarSection label="Explore" items={exploreItems} />
      <hr className="mx-3 my-3 border-gray-200" />
      <SidebarSection label="More from YouTube" items={moreItems} />
      <hr className="mx-3 my-3 border-gray-200" />
      <div className="py-2">
        {settingsItems.map((item) => (
          <SidebarItem key={item.label} item={item} />
        ))}
      </div>
      <hr className="mx-3 my-3 border-gray-200" />
    </div>
  );
}

export default Sidebar;
