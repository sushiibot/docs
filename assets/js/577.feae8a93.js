"use strict";
exports.id = 577;
exports.ids = [577];
exports.modules = {

/***/ 6669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "discord_action_row": () => (/* binding */ DiscordActionRow),
  "discord_attachment": () => (/* binding */ DiscordAttachment),
  "discord_attachments": () => (/* binding */ DiscordAttachments),
  "discord_button": () => (/* binding */ DiscordButton),
  "discord_command": () => (/* binding */ DiscordCommand),
  "discord_embed": () => (/* binding */ DiscordEmbed),
  "discord_embed_field": () => (/* binding */ DiscordEmbedField),
  "discord_embed_fields": () => (/* binding */ DiscordEmbedFields),
  "discord_invite": () => (/* binding */ DiscordInvite),
  "discord_mention": () => (/* binding */ DiscordMention),
  "discord_message": () => (/* binding */ DiscordMessage),
  "discord_messages": () => (/* binding */ DiscordMessages),
  "discord_reaction": () => (/* binding */ DiscordReaction),
  "discord_reactions": () => (/* binding */ DiscordReactions),
  "discord_reply": () => (/* binding */ DiscordReply),
  "discord_system_message": () => (/* binding */ DiscordSystemMessage),
  "discord_tenor_video": () => (/* binding */ DiscordTenorVideo),
  "discord_thread": () => (/* binding */ DiscordThread),
  "discord_thread_message": () => (/* binding */ DiscordThreadMessage)
});

// EXTERNAL MODULE: ./node_modules/@skyra/discord-components-core/dist/esm/index-2d813b2b.js
var index_2d813b2b = __webpack_require__(157);
;// CONCATENATED MODULE: ./node_modules/@skyra/discord-components-core/dist/esm/options-e1c0ed35.js
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
const defaultDiscordAvatars = {
  blue: 'https://cdn.discordapp.com/embed/avatars/0.png',
  gray: 'https://cdn.discordapp.com/embed/avatars/1.png',
  green: 'https://cdn.discordapp.com/embed/avatars/2.png',
  orange: 'https://cdn.discordapp.com/embed/avatars/3.png',
  red: 'https://cdn.discordapp.com/embed/avatars/4.png',
  pink: 'https://cdn.discordapp.com/embed/avatars/5.png'
};
const globalAvatars = (_b = (_a = window.$discordMessage) === null || _a === void 0 ? void 0 : _a.avatars) !== null && _b !== void 0 ? _b : {};
const avatars = Object.assign(defaultDiscordAvatars, globalAvatars, {
  default: (_d = (_c = defaultDiscordAvatars[globalAvatars.default]) !== null && _c !== void 0 ? _c : globalAvatars.default) !== null && _d !== void 0 ? _d : defaultDiscordAvatars.blue
});
const profiles = (_f = (_e = window.$discordMessage) === null || _e === void 0 ? void 0 : _e.profiles) !== null && _f !== void 0 ? _f : {};
const defaultTheme = ((_g = window.$discordMessage) === null || _g === void 0 ? void 0 : _g.defaultTheme) === 'light' ? 'light' : 'dark';
const defaultMode = ((_h = window.$discordMessage) === null || _h === void 0 ? void 0 : _h.defaultMode) === 'compact' ? 'compact' : 'cozy';
const defaultBackground = ((_j = window.$discordMessage) === null || _j === void 0 ? void 0 : _j.defaultBackground) === 'none' ? 'none' : 'discord';



;// CONCATENATED MODULE: ./node_modules/@skyra/discord-components-core/dist/esm/discord-action-row_19.entry.js



const discordActionRowCss = ".discord-action-row{display:flex;flex-wrap:nowrap}";

const DiscordActionRow = class {
  constructor(hostRef) {
    (0,index_2d813b2b.r)(this, hostRef);
  }
  render() {
    return ((0,index_2d813b2b.h)(index_2d813b2b.H, { class: "discord-action-row" }, (0,index_2d813b2b.h)("slot", null)));
  }
};
DiscordActionRow.style = discordActionRowCss;

const padZeroes = (value) => {
  const [month, day, year] = value.split('/');
  return `${month.padStart(2, '0')}/${day.padStart(2, '0')}/${year}`;
};
const formatDate = (value) => {
  if (!(value instanceof Date))
    return value;
  return padZeroes(`${value.getMonth() + 1}/${value.getDate()}/${value.getFullYear()}`);
};
const formatTime = (value, hour24 = false) => {
  if (!(value instanceof Date))
    return value;
  if (hour24)
    return `${value.getHours()}:${value.getMinutes().toString().padStart(2, '0')}`;
  const hour = value.getHours() % 12 || 12;
  const meridiem = value.getHours() < 12 ? 'AM' : 'PM';
  return `${hour}:${value.getMinutes().toString().padStart(2, '0')} ${meridiem}`;
};
const handleTimestamp = (value, useTime = false, hour24 = false) => {
  if (!(value instanceof Date) && typeof value !== 'string') {
    throw new TypeError('Timestamp prop must be a Date object or a string.');
  }
  return useTime ? formatTime(value, hour24) : formatDate(value);
};
const findSlotElement = (elements, name) => {
  return Array.from(elements).find((child) => (child === null || child === void 0 ? void 0 : child.slot) === name);
};
const IMAGE_EXTENSION = /\.(bmp|jpe?g|png|gif|webp|tiff)$/i;
const validateImageExtension = (url) => {
  if (!IMAGE_EXTENSION.test(url))
    throw new Error(`The url of an image for discord-attachment should match the regex ${IMAGE_EXTENSION}`);
};

const discordAttachmentCss = ".discord-attachment{color:#dcddde;display:flex;font-size:13px;line-height:150%;margin-bottom:8px;margin-top:8px}.discord-attachment .discord-image-wrapper{display:block;position:relative;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;overflow:hidden;border-radius:3px}";

const DiscordAttachment = class {
  constructor(hostRef) {
    (0,index_2d813b2b.r)(this, hostRef);
    /**
     * The alt text to show in case the image was unable to load
     * @default 'discord attachment'
     */
    this.alt = 'discord attachment';
  }
  componentWillRender() {
    validateImageExtension(this.url);
  }
  render() {
    return ((0,index_2d813b2b.h)(index_2d813b2b.H, { class: "discord-attachment" }, (0,index_2d813b2b.h)("div", { class: "discord-image-wrapper", style: { height: `${this.height}px`, width: `${this.width}px` } }, (0,index_2d813b2b.h)("img", { alt: this.alt, src: this.url, height: this.height, width: this.width }))));
  }
  get el() { return (0,index_2d813b2b.g)(this); }
};
DiscordAttachment.style = discordAttachmentCss;

const discordAttachmentsCss = ".discord-message .discord-attachments{display:grid;grid-auto-flow:row;grid-row-gap:0.25rem;text-indent:0;min-height:0;min-width:0;padding-top:0.125rem;padding-bottom:0.125rem;position:relative}.discord-message .discord-attachments>*{justify-self:start;-ms-flex-item-align:start;align-self:start}";

const DiscordAttachments = class {
  constructor(hostRef) {
    (0,index_2d813b2b.r)(this, hostRef);
  }
  render() {
    return ((0,index_2d813b2b.h)(index_2d813b2b.H, { class: "discord-attachments" }, (0,index_2d813b2b.h)("slot", null)));
  }
};
DiscordAttachments.style = discordAttachmentsCss;

function Fragment(_props, children) {
  return [...children];
}

function LaunchIcon(props) {
  return ((0,index_2d813b2b.h)("svg", Object.assign({}, props, { "aria-hidden": "false", width: "16", height: "16", viewBox: "0 0 24 24" }),
    (0,index_2d813b2b.h)("path", { fill: "currentColor", d: "M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z" }),
    (0,index_2d813b2b.h)("path", { fill: "currentColor", d: "M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z" })));
}

const discordButtonCss = ".discord-button{display:flex;justify-content:center;align-items:center;cursor:pointer;margin:4px 8px 4px 0;padding:2px 16px;width:auto;height:32px;min-width:60px;min-height:32px;-webkit-transition:background-color 0.17s ease, color 0.17s ease;transition:background-color 0.17s ease, color 0.17s ease;border-radius:3px;font-size:14px;font-weight:500;line-height:16px;text-decoration:none !important}.discord-button.discord-button-success{color:#fff;background-color:#3ba55d}.discord-button.discord-button-success.discord-button-hoverable:hover{background-color:#2d7d46}.discord-button.discord-button-destructive{color:#fff;background-color:#ed4245}.discord-button.discord-button-destructive.discord-button-hoverable:hover{background-color:#c03537}.discord-button.discord-button-primary{color:#fff;background-color:#5865f2}.discord-button.discord-button-primary.discord-button-hoverable:hover{background-color:#4752c4}.discord-button.discord-button-secondary{color:#fff;background-color:#4f545c}.discord-button.discord-button-secondary.discord-button-hoverable:hover{background-color:#5d6269}.discord-button.discord-button-disabled{cursor:not-allowed;opacity:0.5}.discord-button .discord-button-launch{margin-left:8px}.discord-button .discord-button-emoji{margin-right:4px;object-fit:contain;width:1.375em;height:1.375em;vertical-align:bottom}";

const DiscordButton = class {
  constructor(hostRef) {
    (0,index_2d813b2b.r)(this, hostRef);
    /**
     * The name of the emoji used in the button.
     */
    this.emojiName = 'emoji';
    /**
     * Whether to show the button as disabled.
     */
    this.disabled = false;
    /**
     * The type of button this is, this will change the color of the button.
     * Valid values: `primary`, `secondary`, `success`, `destructive`.
     */
    this.type = 'secondary';
  }
  handleType(value) {
    if (typeof value !== 'string') {
      throw new TypeError('DiscordButton `type` prop must be a string.');
    }
    else if (!['primary', 'secondary', 'success', 'destructive'].includes(value)) {
      throw new RangeError("DiscordButton `type` prop must be one of: 'primary', 'secondary', 'success', 'destructive'");
    }
  }
  render() {
    const parent = this.el.parentElement;
    if (parent.tagName.toLowerCase() !== 'discord-action-row') {
      throw new Error('All <discord-button> components must be direct children of <discord-action-row>.');
    }
    const content = ((0,index_2d813b2b.h)(Fragment, null, this.emoji && (0,index_2d813b2b.h)("img", { src: this.emoji, alt: this.emojiName, draggable: false, class: "discord-button-emoji" }), (0,index_2d813b2b.h)("span", null, (0,index_2d813b2b.h)("slot", null)), this.url && (0,index_2d813b2b.h)(LaunchIcon, { class: "discord-button-launch" })));
    return this.url && !this.disabled ? ((0,index_2d813b2b.h)("a", { class: "discord-button discord-button-secondary", href: this.url, target: "_blank", rel: "noopener noreferrer" }, content)) : ((0,index_2d813b2b.h)(index_2d813b2b.H, { class: `discord-button discord-button-${this.type} discord-button-${this.disabled ? 'disabled' : 'hoverable'}` }, content));
  }
  get el() { return (0,index_2d813b2b.g)(this); }
  static get watchers() { return {
    "type": ["handleType"]
  }; }
};
DiscordButton.style = discordButtonCss;

function CommandIcon(props) {
  return ((0,index_2d813b2b.h)("svg", Object.assign({}, props, { width: "6", height: "10", viewBox: "0 0 6 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }),
    (0,index_2d813b2b.h)("path", { d: "M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z", fill: "currentColor" })));
}

const discordCommandCss = ".discord-replied-message.discord-executed-command .discord-command-name{color:#00aff4;font-weight:500}.discord-replied-message.discord-executed-command .discord-command-name:hover{color:#00aff4;text-decoration:underline}.discord-replied-message.discord-executed-command .discord-replied-message-username{margin-right:0}.discord-replied-message{color:#b9bbbe;display:flex;font-size:0.875rem;font-family:Whitney, Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;padding-top:2px;margin-left:56px;margin-bottom:4px;align-items:center;line-height:1.125rem;position:relative;white-space:pre;user-select:none}.discord-light-theme .discord-replied-message{color:#4f5660}.discord-compact-mode .discord-replied-message{margin-left:62px;margin-bottom:0}.discord-replied-message:before{content:'';display:block;position:absolute;top:50%;right:100%;bottom:0;left:-36px;margin-right:4px;margin-top:-1px;margin-left:-1px;margin-bottom:-2px;border-left:2px solid #4f545c;border-bottom:0 solid #4f545c;border-right:0 solid #4f545c;border-top:2px solid #4f545c;border-top-left-radius:6px}.discord-light-theme .discord-replied-message:before{border-color:#747f8d}.discord-replied-message .discord-replied-message-avatar,.discord-replied-message .discord-reply-badge{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:16px;height:16px;border-radius:50%;user-select:none;margin-right:0.25rem}.discord-replied-message .discord-reply-badge{display:flex;align-items:center;justify-content:center;color:#b9bbbe;background:#202225}.discord-light-theme .discord-replied-message .discord-reply-badge{color:#4f5660;background:#e3e5e8}.discord-replied-message .discord-application-tag{background-color:hsl(235, 85.6%, 64.7%);color:#fff;font-size:0.625rem;margin-right:0.25rem;line-height:100%;text-transform:uppercase;display:flex;align-items:center;height:0.9375rem;padding:0 0.275rem;margin-top:0.075em;border-radius:0.1875rem}.discord-replied-message .discord-application-tag .discord-application-tag-verified{width:0.9375rem;height:0.9375rem;margin-left:-0.1rem}.discord-replied-message .discord-replied-message-username{flex-shrink:0;font-size:inherit;line-height:inherit;margin-right:0.25rem;opacity:0.64}.discord-replied-message .discord-replied-message-content{color:inherit;font-size:inherit;line-height:inherit;white-space:pre;text-overflow:ellipsis;user-select:none;cursor:pointer}.discord-replied-message .discord-replied-message-content:hover{color:#fff}.discord-light-theme .discord-replied-message .discord-replied-message-content:hover{color:#000}.discord-replied-message .discord-replied-message-content .discord-message-edited{margin-left:0.25rem}.discord-replied-message .discord-replied-message-content-icon{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:20px;height:20px;margin-left:4px}.discord-message .discord-author-info{display:inline-flex;align-items:center;font-size:15px}.discord-message .discord-author-info .discord-author-username{color:#fff;font-size:1.1em;font-weight:500;letter-spacing:0.5px}.discord-light-theme .discord-message .discord-author-info .discord-author-username{color:#23262a}.discord-message .discord-author-info .discord-application-tag{background-color:#5865f2;color:#fff;font-size:0.65em;margin-left:5px;border-radius:3px;line-height:100%;text-transform:uppercase;display:flex;align-items:center;height:0.9375rem;padding:0 0.275rem;margin-top:0.075em;border-radius:0.1875rem}.discord-message .discord-author-info .discord-application-tag-verified{display:inline-block;width:0.9375rem;height:0.9375rem;margin-left:-0.25rem}.discord-compact-mode .discord-message .discord-author-info .discord-author-username{margin-left:8px;margin-right:4px}.discord-compact-mode .discord-message .discord-author-info .discord-application-tag{margin-left:0;margin-left:5px;margin-right:5px;padding-left:3px;padding-right:3px}";

const DiscordCommand = class {
  constructor(hostRef) {
    (0,index_2d813b2b.r)(this, hostRef);
    /**
     * The message author's username.
     * @default 'User'
     */
    this.author = 'User';
  }
  render() {
    var _a, _b, _c;
    const parent = this.el.parentElement;
    if (parent.tagName.toLowerCase() !== 'discord-message') {
      throw new Error('All <discord-command> components must be direct children of <discord-message>.');
    }
    const resolveAvatar = (avatar) => { var _a, _b; return (_b = (_a = avatars[avatar]) !== null && _a !== void 0 ? _a : avatar) !== null && _b !== void 0 ? _b : avatars["default"]; };
    const defaultData = { author: this.author, bot: false, verified: false, server: false, roleColor: this.roleColor };
    const profileData = (_a = Reflect.get(profiles, this.profile)) !== null && _a !== void 0 ? _a : {};
    const profile = Object.assign(Object.assign(Object.assign({}, defaultData), profileData), { avatar: resolveAvatar((_b = profileData.avatar) !== null && _b !== void 0 ? _b : this.avatar) });
    const messageParent = parent.parentElement;
    return ((0,index_2d813b2b.h)(index_2d813b2b.H, { class: "discord-replied-message discord-executed-command" }, messageParent.compactMode ? ((0,index_2d813b2b.h)("div", { class: "discord-reply-badge" }, (0,index_2d813b2b.h)(CommandIcon, null))) : ((0,index_2d813b2b.h)("img", { class: "discord-replied-message-avatar", src: profile.avatar, alt: profile.author })), (0,index_2d813b2b.h)("span", { class: "discord-replied-message-username", style: { color: (_c = profile.roleColor) !== null && _c !== void 0 ? _c : '' } }, profile.author), ' used ', (0,index_2d813b2b.h)("div", { class: "discord-replied-message-content discord-command-name" }, this.command)));
  }
  get el() { return (0,index_2d813b2b.g)(this); }
};
DiscordCommand.style = discordCommandCss;

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function clsx () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

const discordEmbedCss = ".discord-embed{color:#dcddde;display:flex;font-size:13px;line-height:150%;margin-bottom:8px;margin-top:8px}.discord-light-theme .discord-embed{color:#2e3338}.discord-embed .discord-left-border{background-color:#202225;border-radius:4px 0 0 4px;flex-shrink:0;width:4px}.discord-light-theme .discord-embed .discord-left-border{background-color:#e3e5e8}.discord-embed .discord-embed-root{display:grid;grid-auto-flow:row;grid-row-gap:0.25rem;min-height:0;min-width:0;text-indent:0}.discord-embed .discord-embed-wrapper{background-color:#2f3136;max-width:520px;border:1px solid rgba(46, 48, 54, 0.6);border-radius:0 4px 4px 0;justify-self:start;align-self:start;display:grid;box-sizing:border-box}.discord-light-theme .discord-embed .discord-embed-wrapper{background-color:rgba(249, 249, 249, 0.3);border-color:rgba(205, 205, 205, 0.3)}.discord-embed .discord-embed-wrapper .discord-embed-grid{display:inline-grid;grid-template-columns:auto -webkit-min-content;grid-template-columns:auto min-content;grid-template-columns:auto;grid-template-rows:auto;padding:0.5rem 1rem 1rem 0.75rem}.discord-embed .discord-embed-thumbnail{border-radius:4px;flex-shrink:0;grid-column:2/2;grid-row:1/8;justify-self:end;margin-left:16px;margin-top:8px;max-height:80px;max-width:80px;object-fit:contain;object-position:top center}.discord-embed .discord-embed-author{-webkit-box-align:center;align-items:center;color:#fff;font-size:0.875rem;display:flex;font-weight:500;grid-column:1 / 1;margin-top:8px;min-width:0}.discord-light-theme .discord-embed .discord-embed-author{color:#4f545c}.discord-embed .discord-embed-author a{color:#fff;font-weight:700}.discord-light-theme .discord-embed .discord-embed-author a{color:#4f545c}.discord-embed .discord-embed-author .discord-author-image{border-radius:50%;height:24px;margin-right:8px;width:24px}.discord-embed .discord-embed-provider{font-size:0.75rem;line-height:1rem;font-weight:400;grid-column:1/1;margin-top:8px;unicode-bidi:plaintext;text-align:left}.discord-light-theme .discord-embed .discord-embed-provider{color:#4f545c}.discord-embed .discord-embed-title{-webkit-box-align:center;align-items:center;color:#fff;display:inline-block;font-size:1rem;font-weight:600;grid-column:1 / 1;margin-top:8px;min-width:0}.discord-embed .discord-embed-title a{color:#00b0f4;font-weight:600}.discord-embed .discord-embed-description{font-size:0.875rem;font-weight:400;grid-column:1/1;line-height:1.125rem;margin-top:8px;min-width:0;white-space:pre-line}.discord-embed .discord-embed-image{border-radius:4px;max-width:100%}.discord-embed .discord-embed-media{border-radius:4px;contain:paint;display:block;grid-column:1/1;margin-top:16px}.discord-embed .discord-embed-media.discord-embed-media-video{height:225px}.discord-embed .discord-embed.media .discord-embed-image{overflow:hidden;position:relative;user-select:text}.discord-embed .discord-embed-media .discord-embed-video{-webkit-box-align:center;-webkit-box-pack:center;align-items:center;border-radius:0;cursor:pointer;display:flex;height:100%;justify-content:center;max-height:100%;width:100%;width:400px;height:225px;left:0px;top:0px}.discord-embed .discord-embed-footer{-webkit-box-align:center;align-items:center;color:#fff;display:flex;font-size:0.85em;grid-column:1/3;grid-row:auto/auto;margin-top:8px}.discord-embed .discord-embed-footer .discord-footer-image{border-radius:50%;flex-shrink:0;height:20px;margin-right:8px;width:20px}.discord-embed .discord-embed-footer .discord-footer-separator{color:#fff;font-weight:700;margin:0 4px}.discord-light-theme .discord-embed .discord-embed-footer .discord-footer-separator{color:#e4e4e4}";

const DiscordEmbed = class {
  constructor(hostRef) {
    (0,index_2d813b2b.r)(this, hostRef);
  }
  updateTimestamp(value) {
    if (!value || isNaN(new Date(value).getTime()))
      return null;
    return handleTimestamp(new Date(value));
  }
  componentWillRender() {
    this.timestamp = this.updateTimestamp(this.timestamp);
  }
  render() {
    const footerSlot = findSlotElement(this.el.children, 'footer');
    return ((0,index_2d813b2b.h)("div", { class: "discord-embed" }, (0,index_2d813b2b.h)("div", { style: { 'background-color': this.color }, class: "discord-left-border" }), (0,index_2d813b2b.h)("div", { class: "discord-embed-root" }, (0,index_2d813b2b.h)("div", { class: "discord-embed-wrapper" }, (0,index_2d813b2b.h)("div", { class: "discord-embed-grid" }, this.provider && ((0,index_2d813b2b.h)("div", { class: "discord-embed-provider" }, (0,index_2d813b2b.h)(Fragment, null, this.provider))), this.authorName && ((0,index_2d813b2b.h)("div", { class: "discord-embed-author" }, this.authorImage ? (0,index_2d813b2b.h)("img", { src: this.authorImage, alt: "", class: "discord-author-image" }) : '', this.authorUrl ? ((0,index_2d813b2b.h)("a", { href: this.authorUrl, target: "_blank", rel: "noopener noreferrer" }, this.authorName)) : ((0,index_2d813b2b.h)(Fragment, null, this.authorName)))), this.embedTitle && ((0,index_2d813b2b.h)("div", { class: "discord-embed-title" }, this.url ? ((0,index_2d813b2b.h)("a", { href: this.url, target: "_blank", rel: "noopener noreferrer" }, this.embedTitle)) : ((0,index_2d813b2b.h)(Fragment, null, this.embedTitle)))), (0,index_2d813b2b.h)("div", { class: "discord-embed-description" }, (0,index_2d813b2b.h)("slot", null)), (0,index_2d813b2b.h)("slot", { name: "fields" }), this.image || this.video ? ((0,index_2d813b2b.h)("div", { class: clsx('discord-embed-media', { 'discord-embed-media-video': Boolean(this.video) }) }, this.renderMedia())) : null, this.thumbnail ? (0,index_2d813b2b.h)("img", { src: this.thumbnail, alt: "", class: "discord-embed-thumbnail" }) : '', (footerSlot || this.timestamp) && ((0,index_2d813b2b.h)("div", { class: "discord-embed-footer" }, footerSlot && this.footerImage ? (0,index_2d813b2b.h)("img", { src: this.footerImage, alt: "", class: "discord-footer-image" }) : '', (0,index_2d813b2b.h)(Fragment, null, (0,index_2d813b2b.h)("slot", { name: "footer" }), footerSlot && this.timestamp ? (0,index_2d813b2b.h)("span", { class: "discord-footer-separator" }, "\u2022") : '', this.timestamp ? (0,index_2d813b2b.h)(Fragment, null, this.timestamp) : ''))))))));
  }
  renderMedia() {
    if (this.video) {
      return ((0,index_2d813b2b.h)("video", { controls: true, muted: true, preload: "none", poster: this.image, src: this.video, height: "225", width: "400", class: "discord-embed-video" }, (0,index_2d813b2b.h)("img", { src: this.image, alt: "Discord embed media", class: "discord-embed-image" })));
    }
    else if (this.image) {
      return (0,index_2d813b2b.h)("img", { src: this.image, alt: "Discord embed media", class: "discord-embed-image" });
    }
    return null;
  }
  get el() { return (0,index_2d813b2b.g)(this); }
  static get watchers() { return {
    "timestamp": ["updateTimestamp"]
  }; }
};
DiscordEmbed.style = discordEmbedCss;

const discordEmbedFieldCss = ".discord-embed .discord-embed-field{font-size:0.875rem;line-height:1.125rem;min-width:0;font-weight:400;grid-column:1/13}.discord-embed .discord-embed-field .discord-field-title{color:#ffffff;font-weight:700;font-size:0.875rem;line-height:1.125rem;min-width:0;margin-bottom:2px}.discord-embed .discord-embed-field.discord-inline-field{flex-grow:1;flex-basis:auto;min-width:150px}.discord-light-theme .discord-embed .discord-embed-field .discord-field-title{color:#747f8d}.discord-embed-inline-field-3{grid-column:9/13 !important}.discord-embed-inline-field-2{grid-column:5/9 !important}.discord-embed-inline-field-1{grid-column:1/5 !important}";

const DiscordEmbedField = class {
  constructor(hostRef) {
    (0,index_2d813b2b.r)(this, hostRef);
    /**
     * Whether this field should be displayed inline or not.
     */
    this.inline = false;
    /**
     * The index of this inline field
     * @remark This defines the position of this inline field. 1 is left, 2 is middle and 3 is right.
     * @oneof [1, 2, 3]
     * @default 1
     */
    this.inlineIndex = 1;
    this.validInlineIndices = new Set([1, 2, 3]);
  }
  checkInlineIndex(value) {
    if (!this.validInlineIndices.has(Number(value)))
      throw new RangeError('DiscordEmbedField `inlineIndex` prop must be one of: 1, 2, or 3');
  }
  componentWillRender() {
    this.checkInlineIndex(this.inlineIndex);
  }
  render() {
    const parent = this.el.parentElement;
    if (parent.tagName.toLowerCase() !== 'discord-embed-fields') {
      throw new SyntaxError('All <discord-embed-field> components must be direct children of <discord-embed-fields>.');
    }
    return ((0,index_2d813b2b.h)(index_2d813b2b.H, { class: clsx({
        'discord-embed-inline-field': this.inline,
        'discord-embed-inline-field-1': this.inline && this.inlineIndex === 1,
        'discord-embed-inline-field-2': this.inline && this.inlineIndex === 2,
        'discord-embed-inline-field-3': this.inline && this.inlineIndex === 3
      }, 'discord-embed-field') }, (0,index_2d813b2b.h)("div", { class: "discord-field-title" }, this.fieldTitle), (0,index_2d813b2b.h)("slot", null)));
  }
  get el() { return (0,index_2d813b2b.g)(this); }
  static get watchers() { return {
    "inlineIndex": ["checkInlineIndex"]
  }; }
};
DiscordEmbedField.style = discordEmbedFieldCss;

const discordEmbedFieldsCss = ".discord-embed .discord-embed-fields{display:grid;grid-column:1/1;margin-top:8px;grid-gap:8px}";

const DiscordEmbedFields = class {
  constructor(hostRef) {
    (0,index_2d813b2b.r)(this, hostRef);
  }
  render() {
    return ((0,index_2d813b2b.h)(index_2d813b2b.H, { class: "discord-embed-fields" }, (0,index_2d813b2b.h)("slot", null)));
  }
};
DiscordEmbedFields.style = discordEmbedFieldsCss;

function GuildBadge(props) {
  return ((0,index_2d813b2b.h)("svg", Object.assign({}, props, { "aria-hidden": "false", width: "16", height: "16", viewBox: "0 0 16 15.2" }),
    (0,index_2d813b2b.h)("path", { fill: "currentColor", "fill-rule": "evenodd", d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z" })));
}

const PartnerBadgeOverlay = () => ((0,index_2d813b2b.h)("svg", { "aria-hidden": "false", width: "16", height: "16", viewBox: "0 0 16 16" },
  (0,index_2d813b2b.h)("path", { d: "M10.5906 6.39993L9.19223 7.29993C8.99246 7.39993 8.89258 7.39993 8.69281 7.29993C8.59293 7.19993 8.39317 7.09993 8.29328 6.99993C7.89375 6.89993 7.5941 6.99993 7.29445 7.19993L6.79504 7.49993L4.29797 9.19993C3.69867 9.49993 2.99949 9.39993 2.69984 8.79993C2.30031 8.29993 2.50008 7.59993 2.99949 7.19993L5.99598 5.19993C6.79504 4.69993 7.79387 4.49993 8.69281 4.69993C9.49188 4.89993 10.0912 5.29993 10.5906 5.89993C10.7904 6.09993 10.6905 6.29993 10.5906 6.39993Z", fill: "currentColor" }),
  (0,index_2d813b2b.h)("path", { d: "M13.4871 7.79985C13.4871 8.19985 13.2874 8.59985 12.9877 8.79985L9.89135 10.7999C9.29206 11.1999 8.69276 11.3999 7.99358 11.3999C7.69393 11.3999 7.49417 11.3999 7.19452 11.2999C6.39545 11.0999 5.79616 10.6999 5.29674 10.0999C5.19686 9.89985 5.29674 9.69985 5.39663 9.59985L6.79499 8.69985C6.89487 8.59985 7.09463 8.59985 7.19452 8.69985C7.39428 8.79985 7.59405 8.89985 7.69393 8.99985C8.09346 8.99985 8.39311 8.99985 8.69276 8.79985L9.39194 8.39985L11.3896 6.99985L11.6892 6.79985C12.1887 6.49985 12.9877 6.59985 13.2874 7.09985C13.4871 7.39985 13.4871 7.59985 13.4871 7.79985Z", fill: "currentColor" })));

const VerifiedBadgeOverlay = () => ((0,index_2d813b2b.h)("svg", { "aria-hidden": "false", width: "16", height: "16", viewBox: "0 0 16 15.2" },
  (0,index_2d813b2b.h)("path", { d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z", fill: "currentColor" })));

const discordInviteCss = ".discord-invite{background-color:#2f3136;border-radius:4px;padding:16px;width:432px}.discord-light-theme .discord-invite{background-color:#f2f3f5}.discord-invite .discord-invite-header{font-weight:700;font-size:12px;line-height:16px;margin-bottom:12px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-transform:uppercase;color:#b9bbbe}.discord-light-theme .discord-invite .discord-invite-header{color:#4f5660}.discord-invite .discord-invite-root{display:flex;flex-flow:row nowrap}.discord-invite .discord-invite-icon{background-color:#36393f;border-radius:15px;margin-right:16px;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:50px;height:50px}.discord-light-theme .discord-invite .discord-invite-icon{background-color:#fff}.discord-invite .discord-invite-info{font-family:WhitneyMedium, Whitney, Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;display:flex;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;justify-content:center}.discord-invite .discord-invite-title{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin-bottom:2px;color:white;font-size:16px;line-height:20px;font-weight:700;display:flex;flex-direction:row}.discord-light-theme .discord-invite .discord-invite-title{color:#060607}.discord-invite .discord-invite-name{flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.discord-invite .discord-invite-counts{display:flex;align-items:center;font-size:14px;font-weight:600;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;color:#b9bbbe;line-height:16px}.discord-invite .discord-invite-status{display:block;margin-right:4px;width:8px;height:8px;border-radius:50%;background-color:#747f8d}.discord-invite .discord-invite-status-online{background-color:#3ba55d}.discord-invite .discord-invite-count{-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;margin-right:8px;color:#b9bbbe;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.discord-invite .discord-invite-join{display:flex;justify-content:center;align-items:center;height:40px;padding:0 20px;align-self:center;margin-left:10px;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;line-height:20px;border-radius:3px;font-size:14px;font-weight:600;color:white !important;background-color:#3ba55d;-webkit-transition:background-color 0.17s ease;transition:background-color 0.17s ease}.discord-invite .discord-invite-join:hover{background-color:#2d7d46;text-decoration:none}.discord-invite .discord-invite-badge{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;margin-right:8px;width:16px;height:16px;align-self:center;position:relative}.discord-invite .discord-invite-badge-verified{color:#3ba55d}.discord-invite .discord-invite-badge-partnered{color:#5865f2}.discord-invite .discord-invite-badge-container{position:absolute;top:-0.05px;left:0.05px;right:0;bottom:0;display:flex;align-items:center;justify-content:center;pointer-events:none;color:white}.discord-light-theme .discord-invite .discord-invite-counts,.discord-light-theme .discord-invite .discord-invite-count{color:#4f5660}";

const DiscordInvite = class {
  constructor(hostRef) {
    (0,index_2d813b2b.r)(this, hostRef);
    /**
     * The server icon to display for the invite.
     */
    this.icon = defaultDiscordAvatars.blue;
    /**
     * The server's name.
     * @default 'Discord Server'
     */
    this.name = 'Discord Server';
    /**
     * The number of members online on the server.
     * @default 0
     */
    this.online = 0;
    /**
     * The number of members on the server.
     * @default 0
     */
    this.members = 0;
    /**
     * Whether the server is verified.
     * Only works if `partnered` is `false` or `undefined`.
     */
    this.verified = false;
    /**
     * Whether the server is partnered.
     * Only works if `verified` is `false` or `undefined`.
     */
    this.partnered = false;
  }
  render() {
    return ((0,index_2d813b2b.h)("div", { class: "discord-invite" }, (0,index_2d813b2b.h)("div", { class: "discord-invite-header" }, "You've been invited to join a server"), (0,index_2d813b2b.h)("div", { class: "discord-invite-root" }, (0,index_2d813b2b.h)("img", { class: "discord-invite-icon", src: this.icon, alt: this.name }), (0,index_2d813b2b.h)("div", { class: "discord-invite-info" }, (0,index_2d813b2b.h)("div", { class: "discord-invite-title" }, ((this.verified && !this.partnered) || (!this.verified && this.partnered)) && ((0,index_2d813b2b.h)("div", { class: "discord-invite-badge" }, (0,index_2d813b2b.h)(GuildBadge, { "aria-label": this.partnered ? 'Discord Partner' : 'Verified', class: `discord-invite-badge-${this.partnered ? 'partnered' : 'verified'}` }), (0,index_2d813b2b.h)("div", { class: "discord-invite-badge-container" }, this.partnered ? (0,index_2d813b2b.h)(PartnerBadgeOverlay, null) : (0,index_2d813b2b.h)(VerifiedBadgeOverlay, null)))), (0,index_2d813b2b.h)("span", { class: "discord-invite-name" }, this.name)), (0,index_2d813b2b.h)("div", { class: "discord-invite-counts" }, (0,index_2d813b2b.h)("i", { class: "discord-invite-status discord-invite-status-online" }), (0,index_2d813b2b.h)("span", { class: "discord-invite-count" }, this.online.toLocaleString(), " Online"), (0,index_2d813b2b.h)("i", { class: "discord-invite-status" }), (0,index_2d813b2b.h)("span", { class: "discord-invite-count" }, this.members.toLocaleString(), " Members"))), (0,index_2d813b2b.h)("a", { class: "discord-invite-join", href: this.url, target: "_blank", rel: "noopener noreferrer" }, "Join"))));
  }
  get el() { return (0,index_2d813b2b.g)(this); }
};
DiscordInvite.style = discordInviteCss;

var removeHash = function removeHash(hex) {
  return hex.charAt(0) === '#' ? hex.slice(1) : hex;
};

var parseHex = function parseHex(nakedHex) {
  var isShort = nakedHex.length === 3 || nakedHex.length === 4;
  var twoDigitHexR = isShort ? "".concat(nakedHex.slice(0, 1)).concat(nakedHex.slice(0, 1)) : nakedHex.slice(0, 2);
  var twoDigitHexG = isShort ? "".concat(nakedHex.slice(1, 2)).concat(nakedHex.slice(1, 2)) : nakedHex.slice(2, 4);
  var twoDigitHexB = isShort ? "".concat(nakedHex.slice(2, 3)).concat(nakedHex.slice(2, 3)) : nakedHex.slice(4, 6);
  var twoDigitHexA = (isShort ? "".concat(nakedHex.slice(3, 4)).concat(nakedHex.slice(3, 4)) : nakedHex.slice(6, 8)) || 'ff'; // const numericA = +((parseInt(a, 16) / 255).toFixed(2));

  return {
    r: twoDigitHexR,
    g: twoDigitHexG,
    b: twoDigitHexB,
    a: twoDigitHexA
  };
};

var hexToDecimal = function hexToDecimal(hex) {
  return parseInt(hex, 16);
};

var hexesToDecimals = function hexesToDecimals(_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b,
      a = _ref.a;
  return {
    r: hexToDecimal(r),
    g: hexToDecimal(g),
    b: hexToDecimal(b),
    a: +(hexToDecimal(a) / 255).toFixed(2)
  };
};

var isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}; // eslint-disable-line no-restricted-globals, max-len


var formatRgb = function formatRgb(decimalObject, parameterA) {
  var r = decimalObject.r,
      g = decimalObject.g,
      b = decimalObject.b,
      parsedA = decimalObject.a;
  var a = isNumeric(parameterA) ? parameterA : parsedA;
  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
};
/**
 * Turns an old-fashioned css hex color value into a rgb color value.
 *
 * If you specify an alpha value, you'll get a rgba() value instead.
 *
 * @param The hex value to convert. ('123456'. '#123456', ''123', '#123')
 * @param An alpha value to apply. (optional) ('0.5', '0.25')
 * @return An rgb or rgba value. ('rgb(11, 22, 33)'. 'rgba(11, 22, 33, 0.5)')
 */


var hexToRgba = function hexToRgba(hex, a) {
  var hashlessHex = removeHash(hex);
  var hexObject = parseHex(hashlessHex);
  var decimalObject = hexesToDecimals(hexObject);
  return formatRgb(decimalObject, a);
};

var build = hexToRgba;

function ChannelThread(props) {
  return ((0,index_2d813b2b.h)("svg", Object.assign({}, props, { "aria-hidden": "false", width: "24", height: "24", viewBox: "0 0 24 24" }),
    (0,index_2d813b2b.h)("path", { fill: "currentColor", d: "M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z" }),
    (0,index_2d813b2b.h)("path", { fill: "currentColor", d: "M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z" })));
}

function LockedVoiceChannel(props) {
  return ((0,index_2d813b2b.h)("svg", Object.assign({}, props, { "aria-hidden": "false", width: "24", height: "24", viewBox: "0 0 24 24" }),
    (0,index_2d813b2b.h)("path", { fill: "currentColor", d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z", "aria-hidden": "true" })));
}

function VoiceChannel(props) {
  return ((0,index_2d813b2b.h)("svg", Object.assign({}, props, { "aria-hidden": "false", width: "24", height: "24", viewBox: "0 0 24 24" }),
    (0,index_2d813b2b.h)("path", { fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z", "aria-hidden": "true" })));
}

function ChannelIcon(props) {
  return ((0,index_2d813b2b.h)("svg", Object.assign({}, props, { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }),
    (0,index_2d813b2b.h)("path", { fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z" })));
}

const discordMentionCss = ".discord-message .discord-mention{color:#e3e7f8;background-color:hsla(235, 85.6%, 64.7%, 0.3);font-weight:500;padding:0 2px;border-radius:3px;unicode-bidi:-moz-plaintext;unicode-bidi:plaintext;-webkit-transition:background-color 50ms ease-out, color 50ms ease-out;transition:background-color 50ms ease-out, color 50ms ease-out;cursor:pointer}.discord-message .discord-mention:hover{color:#fff;background-color:hsl(235, 85.6%, 64.7%)}.discord-message .discord-mention.discord-channel-mention{padding-left:1.2rem !important;position:relative}.discord-message .discord-mention.discord-voice-mention,.discord-message .discord-mention.discord-locked-mention,.discord-message .discord-mention.discord-thread-mention{padding-left:1.25rem !important;position:relative}.discord-light-theme .discord-message .discord-mention{color:#687dc6;background-color:hsla(235, 85.6%, 64.7%, 0.15)}.discord-light-theme .discord-message .discord-mention:hover{color:#ffffff;background-color:hsl(235, 85.6%, 64.7%)}.discord-message .discord-mention .discord-mention-icon{width:1rem;height:1rem;object-fit:contain;position:absolute;left:0.125rem;top:0.125rem}.discord-message.discord-highlight-mention{background-color:rgba(250, 166, 26, 0.1);border-radius:0 3px 3px 0;padding-right:5px;position:relative}.discord-light-theme .discord-message.discord-highlight-mention{background-color:rgba(250, 166, 26, 0.1)}.discord-message.discord-highlight-mention:hover{background-color:rgba(250, 166, 26, 0.08)}.discord-light-theme .discord-message.discord-highlight-mention:hover{background-color:rgba(250, 166, 26, 0.2)}.discord-message.discord-highlight-mention::before{background-color:rgb(250, 166, 26);content:' ';position:relative;display:block;top:0;left:-0.75rem;bottom:0;pointer-events:none;width:2px}";

const DiscordMention = class {
  constructor(hostRef) {
    (0,index_2d813b2b.r)(this, hostRef);
    /**
     * Whether this entire message block should be highlighted (to emulate the "logged in user" being pinged).
     */
    this.highlight = false;
    /**
     * The type of mention this should be. This will prepend the proper prefix character.
     * Valid values: `user`, `channel`, `role`, `voice`, and `locked`.
     */
    this.type = 'user';
  }
  handleType(value) {
    if (typeof value !== 'string') {
      throw new TypeError('DiscordMention `type` prop must be a string.');
    }
    else if (!['user', 'channel', 'role', 'voice', 'locked', 'thread'].includes(value)) {
      throw new RangeError("DiscordMention `type` prop must be one of: 'user', 'channel', 'role', 'voice', 'locked', 'thread' ");
    }
  }
  componentWillRender() {
    this.handleType(this.type);
  }
  componentDidLoad() {
    if (this.color && this.type === 'role') {
      this.el.addEventListener('mouseover', this.setHoverColor.bind(this));
      this.el.addEventListener('mouseout', this.resetHoverColor.bind(this));
    }
  }
  disconnectedCallback() {
    if (this.color && this.type === 'role') {
      this.el.removeEventListener('mouseover', this.setHoverColor.bind(this));
      this.el.removeEventListener('mouseout', this.resetHoverColor.bind(this));
    }
  }
  setHoverColor() {
    this.el.style.backgroundColor = build(this.color, 0.3);
  }
  resetHoverColor() {
    this.el.style.backgroundColor = build(this.color, 0.1);
  }
  render() {
    const { color, type } = this;
    const colorStyle = !color || type !== 'role' ? {} : { color, 'background-color': build(color, 0.1) };
    let mentionPrepend = '';
    switch (this.type) {
      case 'channel':
        mentionPrepend = (0,index_2d813b2b.h)(ChannelIcon, { class: "discord-mention-icon" });
        break;
      case 'user':
      case 'role':
        mentionPrepend = '@';
        break;
      case 'voice':
        mentionPrepend = (0,index_2d813b2b.h)(VoiceChannel, { class: "discord-mention-icon" });
        break;
      case 'locked':
        mentionPrepend = (0,index_2d813b2b.h)(LockedVoiceChannel, { class: "discord-mention-icon" });
        break;
      case 'thread':
        mentionPrepend = (0,index_2d813b2b.h)(ChannelThread, { class: "discord-mention-icon" });
        break;
    }
    return ((0,index_2d813b2b.h)(index_2d813b2b.H, { style: colorStyle, class: `discord-mention discord-${type}-mention` }, mentionPrepend, (0,index_2d813b2b.h)("slot", null)));
  }
  get el() { return (0,index_2d813b2b.g)(this); }
  static get watchers() { return {
    "type": ["handleType"]
  }; }
};
DiscordMention.style = discordMentionCss;

const VerifiedTick = () => ((0,index_2d813b2b.h)("svg", { class: "discord-application-tag-verified", "aria-label": "Verified Bot", "aria-hidden": "false", width: "16", height: "16", viewBox: "0 0 16 15.2" },
  (0,index_2d813b2b.h)("path", { d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z", fill: "currentColor" })));

const AuthorInfo = ({ author, bot, server, roleColor, verified, compact }) => ((0,index_2d813b2b.h)("span", { class: "discord-author-info" },
  !compact && ((0,index_2d813b2b.h)("span", { class: "discord-author-username", style: { color: roleColor } }, author)),
  (0,index_2d813b2b.h)(Fragment, null,
    bot && !server && ((0,index_2d813b2b.h)("span", { class: "discord-application-tag" },
      verified && (0,index_2d813b2b.h)(VerifiedTick, null),
      "Bot")),
    server && !bot && (0,index_2d813b2b.h)("span", { class: "discord-application-tag" }, "Server")),
  compact && ((0,index_2d813b2b.h)("span", { class: "discord-author-username", style: { color: roleColor } }, author))));

const discordMessageCss = ".discord-message{color:#dcddde;display:flex;flex-direction:column;font-size:0.9em;font-family:Whitney, Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;padding:0px 1em;position:relative;word-wrap:break-word;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;padding-right:0;min-height:1.375rem;padding-right:48px !important;margin-top:1.0625rem}.discord-message .discord-message-inner{display:flex;position:relative;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.discord-message.discord-message-highlight{background-color:rgba(250, 166, 26, 0.05)}.discord-message.discord-message-highlight:hover{background-color:rgba(250, 166, 26, 0.08)}.discord-message.discord-message-highlight::before{background-color:#faa61a;content:'';position:absolute;display:block;top:0;left:0;bottom:0;pointer-events:none;width:2px}.discord-light-theme .discord-message{color:#2e3338;border-color:#eceeef}.discord-message a{color:#0096cf;font-weight:normal;text-decoration:none}.discord-message a:hover{text-decoration:underline}.discord-light-theme .discord-message a{color:#00b0f4}.discord-message a:hover{text-decoration:underline}.discord-message .discord-author-avatar{margin-right:16px;margin-top:5px;min-width:40px;z-index:1}.discord-message .discord-author-avatar img{width:40px;height:40px;border-radius:50%}.discord-message .discord-message-timestamp{color:#72767d;font-size:12px;margin-left:3px}.discord-light-theme .discord-message .discord-message-timestamp{color:#747f8d}.discord-message .discord-message-edited{color:#72767d;font-size:10px}.discord-light-theme .discord-message .discord-message-edited{color:#99aab5}.discord-message .discord-message-content{width:100%;line-height:160%;font-weight:normal;padding-top:2px}.discord-message .discord-message-body{font-size:1rem;font-weight:400;word-break:break-word;position:relative}.discord-message .discord-message-body pre{border:1px solid #202225;border-radius:4px}.discord-message .discord-message-body code{background:#2f3136;white-space:break-spaces}.discord-light-theme .discord-message .discord-message-timestamp,.discord-compact-mode .discord-message:hover .discord-message-timestamp,.discord-compact-mode.discord-light-theme .discord-message:hover .discord-message-timestamp{color:#99aab5}.discord-compact-mode.discord-light-theme .discord-message .discord-message-timestamp{color:#d1d9de}.discord-compact-mode .discord-message .discord-message-timestamp{display:inline-block;width:3.1rem;text-align:right;font-size:0.6875rem;line-height:1.375rem;margin-right:0.25rem;margin-left:0;text-indent:0}.discord-compact-mode .discord-message{margin-top:unset}.discord-compact-mode .discord-message .discord-message-body{line-height:1.375rem;padding-left:10px;text-indent:-6px}.discord-compact-mode .discord-message .discord-message-compact-indent{padding-left:10px}.discord-message:first-child{margin-top:0.5rem}.discord-message:last-child{margin-bottom:0.5rem;border-bottom-width:0}.discord-message .discord-message-markup{font-size:1rem;line-height:1.375rem;word-wrap:break-word;user-select:text;font-weight:400}.discord-compact-mode .discord-author-avatar{display:none}.discord-message:hover{background-color:rgba(4, 4, 5, 0.07)}.discord-light-theme .discord-message:hover{background-color:rgba(6, 6, 7, 0.02)}.discord-message.discord-message-has-thread:after{width:2rem;left:2.2rem;top:1.75rem;border-left:2px solid #4f545c;border-bottom:2px solid #4f545c;border-bottom-left-radius:8px;bottom:29px;content:'';position:absolute}.discord-light-theme .discord-message.discord-message-has-thread:after{border-color:#747f8d}.discord-message .discord-author-info{display:inline-flex;align-items:center;font-size:15px}.discord-message .discord-author-info .discord-author-username{color:#fff;font-size:1.1em;font-weight:500;letter-spacing:0.5px}.discord-light-theme .discord-message .discord-author-info .discord-author-username{color:#23262a}.discord-message .discord-author-info .discord-application-tag{background-color:#5865f2;color:#fff;font-size:0.65em;margin-left:5px;border-radius:3px;line-height:100%;text-transform:uppercase;display:flex;align-items:center;height:0.9375rem;padding:0 0.275rem;margin-top:0.075em;border-radius:0.1875rem}.discord-message .discord-author-info .discord-application-tag-verified{display:inline-block;width:0.9375rem;height:0.9375rem;margin-left:-0.25rem}.discord-compact-mode .discord-message .discord-author-info .discord-author-username{margin-left:8px;margin-right:4px}.discord-compact-mode .discord-message .discord-author-info .discord-application-tag{margin-left:0;margin-left:5px;margin-right:5px;padding-left:3px;padding-right:3px}";

const DiscordMessage = class {
  constructor(hostRef) {
    (0,index_2d813b2b.r)(this, hostRef);
    /**
     * The message author's username.
     * @default 'User'
     */
    this.author = 'User';
    /**
     * Whether the message author is a bot or not.
     * Only works if `server` is `false` or `undefined`.
     */
    this.bot = false;
    /**
     * Whether the message author is a server crosspost webhook or not.
     * Only works if `bot` is `false` or `undefined`.
     */
    this.server = false;
    /**
     * Whether the bot is verified or not.
     * Only works if `bot` is `true`
     */
    this.verified = false;
    /**
     * Whether the message has been edited or not.
     */
    this.edited = false;
    /**
     * Whether to highlight this message.
     */
    this.highlight = false;
    /**
     * The timestamp to use for the message date.
     */
    this.timestamp = new Date();
    /**
     * Whether to use 24-hour format for the timestamp.
     */
    this.twentyFour = false;
  }
  updateTimestamp(value) {
    const parent = this.el.parentElement;
    return handleTimestamp(value, parent.compactMode, this.twentyFour);
  }
  componentWillRender() {
    const parent = this.el.parentElement;
    this.timestamp = handleTimestamp(this.timestamp, parent.compactMode, this.twentyFour);
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const parent = this.el.parentElement;
    if (parent.tagName.toLowerCase() !== 'discord-messages') {
      throw new Error('All <discord-message> components must be direct children of <discord-messages>.');
    }
    const resolveAvatar = (avatar) => { var _a, _b; return (_b = (_a = avatars[avatar]) !== null && _a !== void 0 ? _a : avatar) !== null && _b !== void 0 ? _b : avatars["default"]; };
    const defaultData = { author: this.author, bot: this.bot, verified: this.verified, server: this.server, roleColor: this.roleColor };
    const profileData = (_a = Reflect.get(profiles, this.profile)) !== null && _a !== void 0 ? _a : {};
    const profile = Object.assign(Object.assign(Object.assign({}, defaultData), profileData), { avatar: resolveAvatar((_b = profileData.avatar) !== null && _b !== void 0 ? _b : this.avatar) });
    const highlightMention = 
    // @ts-expect-error ts doesn't understand this
    Array.from(this.el.children).some((child) => {
      return child.tagName.toLowerCase() === 'discord-mention' && child.highlight && ['user', 'role'].includes(child.type);
    }) || this.highlight;
    const hasThread = 
    // @ts-expect-error ts doesn't understand this
    Array.from(this.el.children).some((child) => {
      return child.tagName.toLowerCase() === 'discord-thread';
    });
    return ((0,index_2d813b2b.h)(index_2d813b2b.H, { class: clsx('discord-message', { 'discord-highlight-mention': highlightMention, 'discord-message-has-thread': hasThread }) }, (0,index_2d813b2b.h)("slot", { name: "reply" }), (0,index_2d813b2b.h)("div", { class: "discord-message-inner" }, parent.compactMode && (0,index_2d813b2b.h)("span", { class: "discord-message-timestamp" }, this.timestamp), (0,index_2d813b2b.h)("div", { class: "discord-author-avatar" }, (0,index_2d813b2b.h)("img", { src: profile.avatar, alt: profile.author })), (0,index_2d813b2b.h)("div", { class: "discord-message-content" }, !parent.compactMode && ((0,index_2d813b2b.h)(Fragment, null, (0,index_2d813b2b.h)(AuthorInfo, { author: (_c = profile.author) !== null && _c !== void 0 ? _c : '', bot: (_d = profile.bot) !== null && _d !== void 0 ? _d : false, server: (_e = profile.server) !== null && _e !== void 0 ? _e : false, verified: (_f = profile.verified) !== null && _f !== void 0 ? _f : false, roleColor: (_g = profile.roleColor) !== null && _g !== void 0 ? _g : '', compact: parent.compactMode }), (0,index_2d813b2b.h)("span", { class: "discord-message-timestamp" }, this.timestamp))), (0,index_2d813b2b.h)("div", { class: "discord-message-body" }, parent.compactMode && ((0,index_2d813b2b.h)(AuthorInfo, { author: (_h = profile.author) !== null && _h !== void 0 ? _h : '', bot: (_j = profile.bot) !== null && _j !== void 0 ? _j : false, server: (_k = profile.server) !== null && _k !== void 0 ? _k : false, verified: (_l = profile.verified) !== null && _l !== void 0 ? _l : false, roleColor: (_m = profile.roleColor) !== null && _m !== void 0 ? _m : '', compact: parent.compactMode })), (0,index_2d813b2b.h)("span", { class: "discord-message-markup" }, (0,index_2d813b2b.h)("slot", null)), this.edited ? (0,index_2d813b2b.h)("span", { class: "discord-message-edited" }, "(edited)") : ''), (0,index_2d813b2b.h)("div", { class: "discord-message-compact-indent" }, (0,index_2d813b2b.h)("slot", { name: "embeds" }), (0,index_2d813b2b.h)("slot", { name: "attachments" }), (0,index_2d813b2b.h)("slot", { name: "components" }), (0,index_2d813b2b.h)("slot", { name: "reactions" }), (0,index_2d813b2b.h)("slot", { name: "thread" }))))));
  }
  get el() { return (0,index_2d813b2b.g)(this); }
  static get watchers() { return {
    "timestamp": ["updateTimestamp"]
  }; }
};
DiscordMessage.style = discordMessageCss;

const discordMessagesCss = "@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');@font-face{font-family:Whitney;font-style:light;font-weight:300;src:url('https://cdn.skyra.pw/whitney-font/Light.woff') format('woff')}@font-face{font-family:Whitney;font-style:normal;font-weight:500;src:url('https://cdn.skyra.pw/whitney-font/Normal.woff') format('woff')}@font-face{font-family:Whitney;font-style:medium;font-weight:600;src:url('https://cdn.skyra.pw/whitney-font/Medium-Regular.woff') format('woff')}@font-face{font-family:WhitneyMedium;font-style:medium;font-weight:600;src:url('https://cdn.skyra.pw/whitney-font/Medium-Extra.woff') format('woff')}@font-face{font-family:Whitney;font-style:bold;font-weight:700;src:url('https://cdn.skyra.pw/whitney-font/Bold.woff') format('woff')}.discord-messages{color:#fff;background-color:#36393e;display:block;font-size:16px;font-family:Whitney, Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;line-height:170%;border:1px solid rgba(255, 255, 255, 0.05)}.discord-messages.discord-light-theme{color:#747f8d;background-color:#fff;border-color:#dedede}.discord-messages.discord-no-background{background-color:unset}";

const DiscordMessages = class {
  constructor(hostRef) {
    (0,index_2d813b2b.r)(this, hostRef);
  }
  componentWillRender() {
    if (this.lightTheme || (defaultTheme === 'light' && this.lightTheme)) {
      this.lightTheme = true;
    }
    if (this.compactMode || (defaultMode === 'compact' && this.compactMode)) {
      this.compactMode = true;
    }
    if (this.noBackground || (defaultBackground === 'none' && this.noBackground)) {
      this.noBackground = true;
    }
  }
  render() {
    return ((0,index_2d813b2b.h)(index_2d813b2b.H, { class: clsx({
        'discord-light-theme': this.lightTheme,
        'discord-compact-mode': this.compactMode,
        'discord-no-background': this.noBackground
      }, 'discord-messages') }, (0,index_2d813b2b.h)("slot", null)));
  }
};
DiscordMessages.style = discordMessagesCss;

const discordReactionCss = ".discord-reaction{border-radius:0.5rem;cursor:pointer;flex-shrink:0;margin-right:0.25rem;margin-bottom:0.25rem;user-select:none;transition:none 0.1s ease;transition-property:background-color, border-color;background-color:#2f3136;border:1px solid transparent}.discord-light-theme .discord-reaction{background-color:#f2f3f5}.discord-reaction:hover{background-color:#36393f;border-color:#fff2}.discord-light-theme .discord-reaction:not(.discord-reaction-reacted):hover{background-color:white;border-color:#0003}.discord-reaction.discord-reaction-reacted{background-color:rgba(88, 101, 242, 0.15);border-color:#5865f2}.discord-light-theme .discord-reaction.discord-reaction-reacted{background-color:#e7e9fd}.discord-reaction .discord-reaction-inner{display:flex;align-items:center;padding:0.125rem 0.375rem}.discord-reaction img{width:1rem;height:1rem;margin:0.125rem 0;min-width:auto;min-height:auto;object-fit:contain;vertical-align:bottom}.discord-reaction .discord-reaction-count{font-size:0.875rem;font-weight:500;margin-left:0.375rem;text-align:center;color:#b9bbbe}.discord-light-theme .discord-reaction .discord-reaction-count{color:#4f5660}.discord-reaction.discord-reaction-reacted .discord-reaction-count{color:#dee0fc}.discord-light-theme .discord-reaction.discord-reaction-reacted .discord-reaction-count{color:#5865f2}";

const DiscordReaction = class {
  constructor(hostRef) {
    (0,index_2d813b2b.r)(this, hostRef);
    /**
     * The name of the emoji to use as alternative image text.
     * @default ':emoji'
     */
    this.name = ':emoji:';
    /**
     * The number of people who reacted.
     * @default 1
     */
    this.count = 1;
    /**
     * Whether the reaction should show as reacted by the user.
     * @default false
     */
    this.reacted = false;
    /**
     * Whether the reaction should be reactive.
     * @remark When the reaction is interactive left clicking it will add 1 to the counter.
     * Whereas when holding the Shift key and left clicking it will decrease the counter.
     * The counter cannot go below 1.
     * @default false
     */
    this.interactive = false;
  }
  render() {
    return ((0,index_2d813b2b.h)("div", { class: clsx('discord-reaction', { 'discord-reaction-reacted': this.reacted }), onClick: this.handleReactionClick.bind(this) }, (0,index_2d813b2b.h)("div", { class: "discord-reaction-inner" }, (0,index_2d813b2b.h)("img", { src: this.emoji, alt: this.name, draggable: false }), (0,index_2d813b2b.h)("span", { class: "discord-reaction-count" }, this.count))));
  }
  handleReactionClick(event) {
    if (this.interactive) {
      if (event.shiftKey) {
        this.count--;
      }
      else {
        this.count++;
      }
      if (this.count <= 0) {
        this.count = 1;
      }
    }
  }
  get el() { return (0,index_2d813b2b.g)(this); }
};
DiscordReaction.style = discordReactionCss;

const discordReactionsCss = ".discord-message .discord-reactions,.discord-system-message .discord-reactions{display:flex;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;align-items:center;flex-wrap:wrap}";

const DiscordReactions = class {
  constructor(hostRef) {
    (0,index_2d813b2b.r)(this, hostRef);
  }
  render() {
    return ((0,index_2d813b2b.h)(index_2d813b2b.H, { class: "discord-reactions" }, (0,index_2d813b2b.h)("slot", null)));
  }
};
DiscordReactions.style = discordReactionsCss;

function AttachmentReply(props) {
  return ((0,index_2d813b2b.h)("svg", Object.assign({}, props, { "aria-hidden": "false", width: "64", height: "64", viewBox: "0 0 64 64" }),
    (0,index_2d813b2b.h)("path", { fill: "currentColor", d: "M56 50.6667V13.3333C56 10.4 53.6 8 50.6667 8H13.3333C10.4 8 8 10.4 8 13.3333V50.6667C8 53.6 10.4 56 13.3333 56H50.6667C53.6 56 56 53.6 56 50.6667ZM22.6667 36L29.3333 44.0267L38.6667 32L50.6667 48H13.3333L22.6667 36Z" })));
}

function CommandReply(props) {
  return ((0,index_2d813b2b.h)("svg", Object.assign({}, props, { "aria-hidden": "false", width: "24", height: "24", viewBox: "0 0 24 24" }),
    (0,index_2d813b2b.h)("path", { fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z" })));
}

function ReplyIcon(props) {
  return ((0,index_2d813b2b.h)("svg", Object.assign({}, props, { width: "12", height: "8", viewBox: "0 0 12 8" }),
    (0,index_2d813b2b.h)("path", { d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z", fill: "currentColor" })));
}

const discordReplyCss = ".discord-replied-message{color:#b9bbbe;display:flex;font-size:0.875rem;font-family:Whitney, Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;padding-top:2px;margin-left:56px;margin-bottom:4px;align-items:center;line-height:1.125rem;position:relative;white-space:pre;user-select:none}.discord-light-theme .discord-replied-message{color:#4f5660}.discord-compact-mode .discord-replied-message{margin-left:62px;margin-bottom:0}.discord-replied-message:before{content:'';display:block;position:absolute;top:50%;right:100%;bottom:0;left:-36px;margin-right:4px;margin-top:-1px;margin-left:-1px;margin-bottom:-2px;border-left:2px solid #4f545c;border-bottom:0 solid #4f545c;border-right:0 solid #4f545c;border-top:2px solid #4f545c;border-top-left-radius:6px}.discord-light-theme .discord-replied-message:before{border-color:#747f8d}.discord-replied-message .discord-replied-message-avatar,.discord-replied-message .discord-reply-badge{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:16px;height:16px;border-radius:50%;user-select:none;margin-right:0.25rem}.discord-replied-message .discord-reply-badge{display:flex;align-items:center;justify-content:center;color:#b9bbbe;background:#202225}.discord-light-theme .discord-replied-message .discord-reply-badge{color:#4f5660;background:#e3e5e8}.discord-replied-message .discord-application-tag{background-color:hsl(235, 85.6%, 64.7%);color:#fff;font-size:0.625rem;margin-right:0.25rem;line-height:100%;text-transform:uppercase;display:flex;align-items:center;height:0.9375rem;padding:0 0.275rem;margin-top:0.075em;border-radius:0.1875rem}.discord-replied-message .discord-application-tag .discord-application-tag-verified{width:0.9375rem;height:0.9375rem;margin-left:-0.1rem}.discord-replied-message .discord-replied-message-username{flex-shrink:0;font-size:inherit;line-height:inherit;margin-right:0.25rem;opacity:0.64}.discord-replied-message .discord-replied-message-content{color:inherit;font-size:inherit;line-height:inherit;white-space:pre;text-overflow:ellipsis;user-select:none;cursor:pointer}.discord-replied-message .discord-replied-message-content:hover{color:#fff}.discord-light-theme .discord-replied-message .discord-replied-message-content:hover{color:#000}.discord-replied-message .discord-replied-message-content .discord-message-edited{margin-left:0.25rem}.discord-replied-message .discord-replied-message-content-icon{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:20px;height:20px;margin-left:4px}.discord-message .discord-author-info{display:inline-flex;align-items:center;font-size:15px}.discord-message .discord-author-info .discord-author-username{color:#fff;font-size:1.1em;font-weight:500;letter-spacing:0.5px}.discord-light-theme .discord-message .discord-author-info .discord-author-username{color:#23262a}.discord-message .discord-author-info .discord-application-tag{background-color:#5865f2;color:#fff;font-size:0.65em;margin-left:5px;border-radius:3px;line-height:100%;text-transform:uppercase;display:flex;align-items:center;height:0.9375rem;padding:0 0.275rem;margin-top:0.075em;border-radius:0.1875rem}.discord-message .discord-author-info .discord-application-tag-verified{display:inline-block;width:0.9375rem;height:0.9375rem;margin-left:-0.25rem}.discord-compact-mode .discord-message .discord-author-info .discord-author-username{margin-left:8px;margin-right:4px}.discord-compact-mode .discord-message .discord-author-info .discord-application-tag{margin-left:0;margin-left:5px;margin-right:5px;padding-left:3px;padding-right:3px}";

const DiscordReply = class {
  constructor(hostRef) {
    (0,index_2d813b2b.r)(this, hostRef);
    /**
     * The message author's username.
     * @default 'User'
     */
    this.author = 'User';
    /**
     * Whether the message author is a bot or not.
     * Only works if `server` is `false` or `undefined`.
     */
    this.bot = false;
    /**
     * Whether the message author is a server crosspost webhook or not.
     * Only works if `bot` is `false` or `undefined`.
     */
    this.server = false;
    /**
     * Whether the bot is verified or not.
     * Only works if `bot` is `true`
     */
    this.verified = false;
    /**
     * Whether the message has been edited or not.
     */
    this.edited = false;
    /**
     * Whether the referenced message is from a response of a slash command.
     */
    this.command = false;
    /**
     * Whether the referenced message contains attachments.
     */
    this.attachment = false;
    /**
     * Whether this reply pings the original message sender, prepending an "@" on the author's username.
     */
    this.mentions = false;
  }
  render() {
    var _a, _b, _c;
    const parent = this.el.parentElement;
    if (parent.tagName.toLowerCase() !== 'discord-message') {
      throw new Error('All <discord-reply> components must be direct children of <discord-message>.');
    }
    const resolveAvatar = (avatar) => { var _a, _b; return (_b = (_a = avatars[avatar]) !== null && _a !== void 0 ? _a : avatar) !== null && _b !== void 0 ? _b : avatars["default"]; };
    const defaultData = { author: this.author, bot: this.bot, verified: this.verified, server: this.server, roleColor: this.roleColor };
    const profileData = (_a = Reflect.get(profiles, this.profile)) !== null && _a !== void 0 ? _a : {};
    const profile = Object.assign(Object.assign(Object.assign({}, defaultData), profileData), { avatar: resolveAvatar((_b = profileData.avatar) !== null && _b !== void 0 ? _b : this.avatar) });
    const messageParent = parent.parentElement;
    return ((0,index_2d813b2b.h)(index_2d813b2b.H, { class: "discord-replied-message" }, messageParent.compactMode ? ((0,index_2d813b2b.h)("div", { class: "discord-reply-badge" }, (0,index_2d813b2b.h)(ReplyIcon, null))) : ((0,index_2d813b2b.h)("img", { class: "discord-replied-message-avatar", src: profile.avatar, alt: profile.author })), (0,index_2d813b2b.h)(Fragment, null, profile.bot && !profile.server && ((0,index_2d813b2b.h)("span", { class: "discord-application-tag" }, profile.verified && (0,index_2d813b2b.h)(VerifiedTick, null), "Bot")), profile.server && !profile.bot && (0,index_2d813b2b.h)("span", { class: "discord-application-tag" }, "Server")), (0,index_2d813b2b.h)("span", { class: "discord-replied-message-username", style: { color: (_c = profile.roleColor) !== null && _c !== void 0 ? _c : '' } }, this.mentions && '@', profile.author), (0,index_2d813b2b.h)("div", { class: "discord-replied-message-content" }, (0,index_2d813b2b.h)("slot", null), this.edited ? (0,index_2d813b2b.h)("span", { class: "discord-message-edited" }, "(edited)") : ''), this.command ? ((0,index_2d813b2b.h)(CommandReply, { class: "discord-replied-message-content-icon" })) : (this.attachment && (0,index_2d813b2b.h)(AttachmentReply, { class: "discord-replied-message-content-icon" }))));
  }
  get el() { return (0,index_2d813b2b.g)(this); }
};
DiscordReply.style = discordReplyCss;

function Boost(props) {
  return ((0,index_2d813b2b.h)("svg", Object.assign({}, props, { "aria-hidden": "false", width: "24", height: "24", viewBox: "0 0 8 12" }),
    (0,index_2d813b2b.h)("path", { d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z", fill: "currentColor" }),
    (0,index_2d813b2b.h)("path", { d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z", fill: "currentColor" })));
}

function DMCall(props) {
  return ((0,index_2d813b2b.h)("svg", Object.assign({}, props, { "aria-hidden": "false", width: "18", height: "18", viewBox: "0 0 18 18" }),
    (0,index_2d813b2b.h)("path", { fill: "#3ba55c", "fill-rule": "evenodd", d: "M17.7163041 15.36645368c-.0190957.02699568-1.9039523 2.6680735-2.9957762 2.63320406-3.0676659-.09785935-6.6733809-3.07188394-9.15694343-5.548738C3.08002193 9.9740657.09772497 6.3791404 0 3.3061316v-.024746C0 2.2060575 2.61386252.3152347 2.64082114.2972376c.7110335-.4971705 1.4917101-.3149497 1.80959713.1372281.19320342.2744561 2.19712724 3.2811005 2.42290565 3.6489167.09884826.1608492.14714912.3554431.14714912.5702838 0 .2744561-.07975258.5770327-.23701117.8751101-.1527655.2902036-.65262318 1.1664385-.89862055 1.594995.2673396.3768148.94804468 1.26429792 2.351016 2.66357424 1.39173858 1.39027775 2.28923588 2.07641807 2.67002628 2.34187563.4302146-.2452108 1.3086162-.74238132 1.5972981-.89423205.5447887-.28682915 1.0907006-.31944893 1.4568885-.08661115.3459689.2182151 3.3383754 2.21027167 3.6225641 2.41611376.2695862.19234426.4144887.5399137.4144887.91672846 0 .2969525-.089862.61190215-.2808189.88523346" })));
}

function DMEdit(props) {
  return ((0,index_2d813b2b.h)("svg", Object.assign({}, props, { "aria-hidden": "false", width: "18", height: "18", viewBox: "0 0 18 18" }),
    (0,index_2d813b2b.h)("g", { fill: "none", "fill-rule": "evenodd" },
      (0,index_2d813b2b.h)("path", { fill: "#99AAB5", d: "M0 14.25V18h3.75L14.81 6.94l-3.75-3.75L0 14.25zM17.71 4.04c.39-.39.39-1.02 0-1.41L15.37.29c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" }),
      (0,index_2d813b2b.h)("path", { d: "M0 0h18v18H0" }))));
}

function DMMissedCall(props) {
  return ((0,index_2d813b2b.h)("svg", Object.assign({}, props, { "aria-hidden": "false", width: "18", height: "18", viewBox: "0 0 18 18" }),
    (0,index_2d813b2b.h)("g", { fill: "none", "fill-rule": "evenodd" },
      (0,index_2d813b2b.h)("path", { d: "M0 0h18v18H0z" }),
      (0,index_2d813b2b.h)("path", { fill: "#99AAB5", d: "M3.2765961.00034226C6.344262.0982016 9.949977 3.0722262 12.43353953 5.54908026c2.48356254 2.47685405 5.4658595 6.07177934 5.56358447 9.14478814 0 1.1000741-2.61386252 2.9908969-2.64082114 3.008894-.7110335.4971705-1.4917101.3149497-1.80959713-.1372281-.19320342-.2744561-2.19712724-3.2811005-2.42290565-3.6489167-.09884826-.1608492-.14714912-.3554431-.14714912-.5702838 0-.2744561.07975258-.5770327.23701117-.8751101.1527655-.2902036.65262318-1.1664385.89862055-1.594995-.2673396-.3768148-.94804468-1.26429792-2.351016-2.66357424C8.3695281 6.8223767 7.4720308 6.1362364 7.0912404 5.87077883c-.4302146.2452108-1.3086162.74238132-1.5972981.89423205-.5447887.28682915-1.0907006.31944893-1.4568885.08661115C3.6910849 6.63340693.6986784 4.64135036.4144897 4.43550827.1449035 4.243164.000001 3.89559457.000001 3.5187798c0-.29695252.089862-.61190217.2808189-.88523348.0190957-.02699568 1.9039523-2.6680735 2.9957762-2.63320406z" }))));
}

function SystemAlert(props) {
  return ((0,index_2d813b2b.h)("svg", Object.assign({}, props, { "aria-hidden": "false", width: "20", height: "20", viewBox: "0 0 20 20" }),
    (0,index_2d813b2b.h)("path", { d: "M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z", "fill-rule": "evenodd", "clip-rule": "evenodd", fill: "currentColor" })));
}

function SystemError(props) {
  return ((0,index_2d813b2b.h)("svg", Object.assign({}, props, { "aria-hidden": "false", width: "24", height: "24", viewBox: "0 0 24 24" }),
    (0,index_2d813b2b.h)("path", { xmlns: "http://www.w3.org/2000/svg", d: "M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z", fill: "#ed4245" })));
}

function Thread(props) {
  return ((0,index_2d813b2b.h)("svg", Object.assign({}, props, { "aria-hidden": "false", width: "24", height: "24", viewBox: "0 0 24 24" }),
    (0,index_2d813b2b.h)("path", { fill: "currentColor", d: "M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z" }),
    (0,index_2d813b2b.h)("path", { fill: "currentColor", d: "M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z" })));
}

function UserJoin(props) {
  return ((0,index_2d813b2b.h)("svg", Object.assign({}, props, { "aria-hidden": "false", width: "18", height: "18", viewBox: "0 0 18 18" }),
    (0,index_2d813b2b.h)("g", { fill: "none", "fill-rule": "evenodd" },
      (0,index_2d813b2b.h)("path", { d: "M18 0H0v18h18z" }),
      (0,index_2d813b2b.h)("path", { fill: "#3ba55c", d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0" }))));
}

function UserLeave(props) {
  return ((0,index_2d813b2b.h)("svg", Object.assign({}, props, { "aria-hidden": "false", width: "18", height: "18", viewBox: "0 0 18 18" }),
    (0,index_2d813b2b.h)("g", { fill: "none", "fill-rule": "evenodd", stroke: "none", "stroke-width": "1" },
      (0,index_2d813b2b.h)("path", { d: "M18 0H0v18h18z" }),
      (0,index_2d813b2b.h)("path", { fill: "#ed4245", d: "M3.8 8l3.6-3.6L6 3 0 9l6 6 1.4-1.4L3.8 10H18V8" }))));
}

const discordSystemMessageCss = ".discord-system-message{color:#8e9297;display:flex;font-weight:400;font-size:1rem;font-family:Whitney, Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;padding:0px 1em;position:relative;word-wrap:break-word;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;padding-right:0;min-height:1.375rem;padding-right:48px !important;margin-top:1.0625rem}.discord-light-theme .discord-system-message{color:#2e3338;border-color:#eceeef}.discord-system-message.discord-channel-name-change{color:#fff}.discord-light-theme .discord-system-message.discord-channel-name-change{color:#060607}.discord-system-message.discord-boost-system-message svg{color:#ff73fa}.discord-system-message.discord-alert-system-message svg{color:#faa81a}.discord-system-message.discord-error-system-message svg{color:#faa81a}.discord-system-message:first-child{margin-top:0.5rem}.discord-system-message:last-child{margin-bottom:0.5rem;border-bottom-width:0}.discord-system-message .discord-message-icon{margin-right:16px;margin-top:5px;min-width:40px;display:flex;align-items:flex-start;justify-content:center}.discord-system-message .discord-message-icon svg{width:16px;height:16px}.discord-system-message .discord-message-timestamp{color:#72767d;font-size:12px;margin-left:3px}.discord-light-theme .discord-system-message .discord-message-timestamp{color:#747f8d}.discord-system-message .discord-message-system-edited{color:#72767d;font-size:10px}.discord-light-theme .discord-system-message .discord-message-edited{color:#99aab5}.discord-system-message .discord-message-content{width:100%;line-height:160%;font-weight:normal;padding-top:2px;display:flex;flex-direction:column}.discord-system-message .discord-message-content i{font-style:normal;cursor:pointer;color:white;font-weight:500}.discord-light-theme .discord-system-message .discord-message-content i{color:#060607}.discord-system-message .discord-message-content i:hover{text-decoration:underline}.discord-system-message:hover{background-color:rgba(4, 4, 5, 0.07)}.discord-light-theme .discord-system-message:hover{background-color:rgba(6, 6, 7, 0.02)}.discord-system-message.discord-system-message-has-thread:after{width:2rem;left:2.2rem;top:1.75rem;border-left:2px solid #4f545c;border-bottom:2px solid #4f545c;border-bottom-left-radius:8px;bottom:29px;content:'';position:absolute}.discord-light-theme .discord-system-message.discord-system-message-has-thread:after{border-color:#747f8d}.discord-message .discord-author-info{display:inline-flex;align-items:center;font-size:15px}.discord-message .discord-author-info .discord-author-username{color:#fff;font-size:1.1em;font-weight:500;letter-spacing:0.5px}.discord-light-theme .discord-message .discord-author-info .discord-author-username{color:#23262a}.discord-message .discord-author-info .discord-application-tag{background-color:#5865f2;color:#fff;font-size:0.65em;margin-left:5px;border-radius:3px;line-height:100%;text-transform:uppercase;display:flex;align-items:center;height:0.9375rem;padding:0 0.275rem;margin-top:0.075em;border-radius:0.1875rem}.discord-message .discord-author-info .discord-application-tag-verified{display:inline-block;width:0.9375rem;height:0.9375rem;margin-left:-0.25rem}.discord-compact-mode .discord-message .discord-author-info .discord-author-username{margin-left:8px;margin-right:4px}.discord-compact-mode .discord-message .discord-author-info .discord-application-tag{margin-left:0;margin-left:5px;margin-right:5px;padding-left:3px;padding-right:3px}";

const DiscordSystemMessage = class {
  constructor(hostRef) {
    (0,index_2d813b2b.r)(this, hostRef);
    /**
     * The timestamp to use for the message date.
     */
    this.timestamp = new Date();
    /**
     * The type of system message this is, this will change the icon shown.
     * Valid values: `join`, `leave`, `call`, `missed-call`, `boost`, `edit`, `thread`, `alert`, and `error`.
     */
    this.type = 'join';
    /**
     * Whether this message is to show channel name changes, used to match Discord's style.
     */
    this.channelName = false;
  }
  handleType(value) {
    if (typeof value !== 'string') {
      throw new TypeError('DiscordSystemMessage `type` prop must be a string.');
    }
    else if (!['join', 'leave', 'call', 'missed-call', 'boost', 'edit', 'thread', 'alert', 'error'].includes(value)) {
      throw new RangeError("DiscordSystemMessage `type` prop must be one of: 'join', 'leave', 'call', 'missed-call', 'boost', 'edit', 'thread' 'alert', 'error'");
    }
  }
  updateTimestamp(value) {
    return handleTimestamp(value);
  }
  componentWillRender() {
    this.timestamp = handleTimestamp(this.timestamp);
  }
  render() {
    const parent = this.el.parentElement;
    if (parent.tagName.toLowerCase() !== 'discord-messages') {
      throw new Error('All <discord-system-message> components must be direct children of <discord-messages>.');
    }
    let icon = '';
    switch (this.type) {
      case 'join':
        icon = (0,index_2d813b2b.h)(UserJoin, null);
        break;
      case 'leave':
        icon = (0,index_2d813b2b.h)(UserLeave, null);
        break;
      case 'call':
        icon = (0,index_2d813b2b.h)(DMCall, null);
        break;
      case 'missed-call':
        icon = (0,index_2d813b2b.h)(DMMissedCall, null);
        break;
      case 'edit':
        icon = (0,index_2d813b2b.h)(DMEdit, null);
        break;
      case 'boost':
        icon = (0,index_2d813b2b.h)(Boost, null);
        break;
      case 'thread':
        icon = (0,index_2d813b2b.h)(Thread, null);
        break;
      case 'alert':
        icon = (0,index_2d813b2b.h)(SystemAlert, null);
        break;
      case 'error':
        icon = (0,index_2d813b2b.h)(SystemError, null);
        break;
    }
    const hasThread = 
    // @ts-expect-error ts doesn't understand this
    Array.from(this.el.children).some((child) => {
      return child.tagName.toLowerCase() === 'discord-thread';
    });
    return ((0,index_2d813b2b.h)(index_2d813b2b.H, { class: clsx('discord-system-message', `discord-${this.type}-system-message`, {
        'discord-system-message-has-thread': hasThread,
        'discord-channel-name-change': this.channelName
      }) }, (0,index_2d813b2b.h)("div", { class: "discord-message-icon" }, icon), (0,index_2d813b2b.h)("div", { class: "discord-message-content" }, (0,index_2d813b2b.h)("span", null, (0,index_2d813b2b.h)("slot", null), (0,index_2d813b2b.h)("span", { class: "discord-message-timestamp" }, this.timestamp)), (0,index_2d813b2b.h)("slot", { name: "reactions" }), (0,index_2d813b2b.h)("slot", { name: "thread" }))));
  }
  get el() { return (0,index_2d813b2b.g)(this); }
  static get watchers() { return {
    "type": ["handleType"],
    "timestamp": ["updateTimestamp"]
  }; }
};
DiscordSystemMessage.style = discordSystemMessageCss;

const discordTenorVideoCss = ".discord-tenor-video{color:#dcddde;display:flex;font-size:13px;line-height:150%;margin-bottom:8px;margin-top:8px}.discord-tenor-video .discord-tenor-video-wrapper{display:block;position:relative;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;overflow:hidden;border-radius:4px}.discord-tenor-video .discord-tenor-video-wrapper video{-webkit-box-align:center;-webkit-box-pack:center;align-items:center;border-radius:0;cursor:pointer;display:flex;height:100%;justify-content:center;max-height:100%;width:100%;left:0px;top:0px}";

const DiscordTenorVideo = class {
  constructor(hostRef) {
    (0,index_2d813b2b.r)(this, hostRef);
  }
  render() {
    return ((0,index_2d813b2b.h)(index_2d813b2b.H, { class: "discord-tenor-video" }, (0,index_2d813b2b.h)("div", { class: "discord-tenor-video-wrapper", style: { height: `${this.height}px`, width: `${this.width}px` } }, (0,index_2d813b2b.h)("video", { muted: true, preload: "auto", autoplay: true, loop: true, src: this.url, height: this.height, width: this.width }))));
  }
  get el() { return (0,index_2d813b2b.g)(this); }
};
DiscordTenorVideo.style = discordTenorVideoCss;

const discordThreadCss = ".discord-thread{background-color:#2f3136;border-radius:4px;cursor:pointer;margin-top:8px;max-width:480px;min-width:0;padding:8px;display:inline-flex;width:fit-content;flex-direction:column}.discord-light-theme .discord-thread{background-color:#f2f3f5}.discord-thread .discord-thread-top{display:flex}.discord-thread .discord-thread-bottom{font-size:0.875rem;line-height:1.125rem;align-items:center;color:#b9bbbe;display:flex;margin-top:2px;white-space:nowrap}.discord-light-theme .discord-thread-bottom{color:#4f5660}.discord-thread .discord-thread-name{font-size:0.875rem;font-weight:600;line-height:1.125rem;color:white;margin-right:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.discord-light-theme .discord-thread-name{color:#060607}.discord-thread .discord-thread-cta{color:#00aff4;flex-shrink:0;font-size:0.875rem;font-weight:600;line-height:1.125rem}.discord-thread:hover .discord-thread-cta{text-decoration:underline}";

const DiscordThread = class {
  constructor(hostRef) {
    (0,index_2d813b2b.r)(this, hostRef);
    /**
     * The name of the thread.
     */
    this.name = 'Thread';
    /**
     * The the text within the call to action text. (i.e. 'See Thread' or 'x Messages')
     */
    this.cta = 'See Thread';
  }
  render() {
    return ((0,index_2d813b2b.h)(index_2d813b2b.H, { class: "discord-thread" }, (0,index_2d813b2b.h)("div", { class: "discord-thread-top" }, (0,index_2d813b2b.h)("span", { class: "discord-thread-name" }, this.name), (0,index_2d813b2b.h)("span", { class: "discord-thread-cta", "aria-hidden": "true" }, this.cta, " \u203A")), (0,index_2d813b2b.h)("span", { class: "discord-thread-bottom" }, (0,index_2d813b2b.h)("slot", null))));
  }
  get el() { return (0,index_2d813b2b.g)(this); }
};
DiscordThread.style = discordThreadCss;

const discordThreadMessageCss = ".discord-thread-message{height:18px;min-width:0;display:flex;align-items:center;font-size:0.875rem;line-height:1.125rem}.discord-thread-message .discord-thread-message-avatar{margin-right:8px;flex:0 0 auto;width:16px;height:16px;border-radius:50%;user-select:none}.discord-thread-message .discord-thread-message-username{flex-shrink:0;font-size:inherit;line-height:inherit;margin-right:0.25rem;opacity:0.64;color:white;display:inline;vertical-align:baseline;position:relative;overflow:hidden}.discord-light-theme .discord-thread-message .discord-thread-message-username{color:#060607}.discord-thread-message .discord-application-tag{background-color:#5865f2;color:#fff;font-size:0.65em;margin-right:5px;border-radius:3px;line-height:100%;text-transform:uppercase;display:flex;align-items:center;height:0.9375rem;padding:0 0.275rem;margin-top:0.075em;border-radius:0.1875rem}.discord-thread-message .discord-application-tag-verified{display:inline-block;width:0.9375rem;height:0.9375rem;margin-left:-0.25rem}.discord-thread-message .discord-thread-message-content{display:flex;align-items:baseline}.discord-thread-message .discord-message-edited{color:#72767d;font-size:10px;margin-left:5px}.discord-thread-message .discord-thread-message-timestamp{color:#72767d;flex-shrink:0;margin-left:8px;font-size:0.875rem;line-height:1.125rem}.discord-light-theme .discord-thread-message .discord-thread-message-timestamp,.discord-light-theme .discord-thread-message .discord-message-edited{color:#747f8d}";

const DiscordThreadMessage = class {
  constructor(hostRef) {
    (0,index_2d813b2b.r)(this, hostRef);
    /**
     * The message author's username.
     * @default 'User'
     */
    this.author = 'User';
    /**
     * Whether the message author is a bot or not.
     * Only works if `server` is `false` or `undefined`.
     */
    this.bot = false;
    /**
     * Whether the message author is a server crosspost webhook or not.
     * Only works if `bot` is `false` or `undefined`.
     */
    this.server = false;
    /**
     * Whether the bot is verified or not.
     * Only works if `bot` is `true`
     */
    this.verified = false;
    /**
     * Whether the message has been edited or not.
     */
    this.edited = false;
    /**
     * The relative timestamp of the message.
     */
    this.relativeTimestamp = '1m ago';
  }
  render() {
    var _a, _b;
    const resolveAvatar = (avatar) => { var _a, _b; return (_b = (_a = avatars[avatar]) !== null && _a !== void 0 ? _a : avatar) !== null && _b !== void 0 ? _b : avatars["default"]; };
    const defaultData = { author: this.author, bot: this.bot, verified: this.verified, server: this.server, roleColor: this.roleColor };
    const profileData = (_a = Reflect.get(profiles, this.profile)) !== null && _a !== void 0 ? _a : {};
    const profile = Object.assign(Object.assign(Object.assign({}, defaultData), profileData), { avatar: resolveAvatar((_b = profileData.avatar) !== null && _b !== void 0 ? _b : this.avatar) });
    return ((0,index_2d813b2b.h)(index_2d813b2b.H, { class: "discord-thread-message" }, (0,index_2d813b2b.h)("img", { src: profile.avatar, class: "discord-thread-message-avatar", alt: profile.author }), (0,index_2d813b2b.h)(Fragment, null, profile.bot && !profile.server && ((0,index_2d813b2b.h)("span", { class: "discord-application-tag" }, profile.verified && (0,index_2d813b2b.h)(VerifiedTick, null), "Bot")), profile.server && !profile.bot && (0,index_2d813b2b.h)("span", { class: "discord-application-tag" }, "Server")), (0,index_2d813b2b.h)("span", { class: "discord-thread-message-username", style: { color: profile.roleColor } }, profile.author), (0,index_2d813b2b.h)("div", { class: "discord-thread-message-content" }, (0,index_2d813b2b.h)("slot", null), this.edited ? (0,index_2d813b2b.h)("span", { class: "discord-message-edited" }, "(edited)") : ''), (0,index_2d813b2b.h)("span", { class: "discord-thread-message-timestamp" }, this.relativeTimestamp)));
  }
  get el() { return (0,index_2d813b2b.g)(this); }
};
DiscordThreadMessage.style = discordThreadMessageCss;




/***/ })

};
;