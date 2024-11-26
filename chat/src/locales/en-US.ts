import { log } from "console";

export default {
	common: {
		add: "Add",
		addSuccess: "Add Success",
		edit: "Edit",
		editSuccess: "Edit Success",
		delete: "Delete",
		deleteSuccess: "Delete Success",
		save: "Save",
		saveSuccess: "Save Success",
		reset: "Reset",
		action: "Action",
		export: "Export",
		exportSuccess: "Export Success",
		import: "Import",
		importSuccess: "Import Success",
		clear: "Clear",
		clearSuccess: "Clear Success",
		yes: "Yes",
		no: "No",
		confirm: "Confirm",
		download: "Download",
		noData: "No Data",
		wrong: "Something went wrong, please try again later.",
		success: "Success",
		failed: "Failed",
		verify: "Verify",
		unauthorizedTips: "Unauthorized, please verify first.",
		keywordFilter: "Keyword filter",
		close: "Close",
		enable: "Enable",
		send: "Send",
		cancel: "Cancel",
		logout: "Logout",
		login: "Login",
		days: "days",
		buy: "buy",
		permanent: "permanent",
		error404: "The page is lost",
		error404Extra: "oops! The page seems to be lost and cannot be found.",
		error500: "Something went wrong",
		use: "Use",
		welcome: "Welcome to this community",
	},
	chat: {
		newChatButton: "New Chat",
		placeholder: "Ask me anything...(Shift + Enter = line break)",
		placeholderMobile: "Ask me anything...",
		copy: "Copy",
		regenerate: "Regenerate",
		copied: "Copied",
		copyCode: "Copy Code",
		clearChat: "Clear Chat",
		clearChatConfirm: "Are you sure to clear this chat?",
		exportImage: "Export Image",
		exportImageConfirm: "Are you sure to export this chat to png?",
		exportSuccess: "Export Success",
		exportFailed: "Export Failed",
		usingContext: "Context Mode",
		turnOnContext:
			"In the current mode, sending messages will carry previous chat records.",
		turnOffContext:
			"In the current mode, sending messages will not carry previous chat records.",
		deleteMessage: "Delete Message",
		deleteMessageConfirm: "Are you sure to delete this message?",
		deleteHistoryConfirm: "Are you sure to clear this history?",
		clearHistoryConfirm: "Are you sure to clear chat history?",
		preview: "Preview",
		showRawText: "Show as raw text",
		searchHistoryPlaceholder: "Search chat history",
		appList: "App list",
		today: "Today",
		other: "Other",
		pin: "Pin to top",
		shopPlan: "Shop your plan",
		standardLimit: "Standard limit",
		used: "I have used",
		points: "Points",
		modelCost: "Model cost",
		pointsPerConversation: "Points / conversation",
		advancedQuota: "Advanced quota",
		noticeBoard: "Notice board",
		workbench: "Workbench",
		membersPackage: "Members Package",
		standardMembership: "Membership package details",
		premiumMembership: "Premium Model Supplement Pack Details ",
		paintMembership: "Paint Model Supplement Pack Details",
		basicModelQuota: "Basic model quota",
		advancedModelQuota: "Advanced model quota",
		mjPaintingQuota: "MJ painting quota",
		buyPackage: "Buy Package",
		dontRemindMeToday: "Don't remind me today",
		understood: "I understand",
		workbenchTitle: "My custom workbench",
		createCustomApp: "Create custom app",
		marketplaceAddApp: "Go to the marketplace to add apps",
		exportPageAsPicture: "Export page as picture",
		deletePageContent: "Delete page content",
		scrollToBottom: "Scroll to bottom",
		sampleTemplate: "Sample template",
		contextState: "Context state",
		internet: "Internet access",
		changeModelSuccess:
			"Modification of the current conversation group custom model configuration was successful!",
		modelSettingTitle: "Model personalization",
		modelSettingSelection: "Model selection",
		modelSettingPresets: "Custom character presets",
		modelSettingPresetInput:
			"Customize the head preset, preset an identity for your AI, and for more interesting characters, please go to the 'Application Square'...",
		modelSettingAdvanced: "Advanced configuration",
		modelSettingAdvancedInfo:
			"(If you don’t understand, no modification is required)",
		modelSettingReset: "Reset",
		modelSettingRandomness: "Topic randomness",
		modelSettingRandomnessInfo:
			"Higher values ​​will make the output of the same problem more random each time.",
		modelSettingToken: "Number of reply tokens",
		modelSettingTokenInfo:
			"Number of single replies, but it will also consume more credits",
		modelSettingContext: "Number of associated contexts",
		modelSettingContextInfo:
			"Number of single replies, but it will also consume more credits",
		emptyChatTitle: "Get started with Pockyt AI ",
		emptyChatInfo: "Click the button below to start your free trial ",
		emptyChatButton: "New conversation",
		dallEPainting: "DALL-E Painting",
		dallEInfo:
			"Drawing based on DALL-E, faster, synchronization waits until the end, and you can see the result in my drawing! ",
		changePrompt: "Change prompt",
		promptExampleTitle: "Prompt example",
		promptExampleInfo:
			"Super realistic future world, real photos, Unreal Engine",
		paintingPlaceholder:
			"Please enter the image description information you want to generate. You can refer to the sample text above. We will convert it into an English painting. Please know!",
		generatePicture: "Generate picture",
		parameterSettings: "Parameter settings",
		imageSize: "Image size",
		pictureQuality: "Picture quality",
		modifierRef: "Modifier reference ",
		modifierRefInfo:
			"You can refer to or choose the following types of modifiers to enrich your input text and try to generate more diverse images. For more modifiers, please refer to the Prompt Guide or Free Input to explore more unknown abilities in large model painting.",
		imageType: "Image type",
		publicBuild: "Public build",
		myBuild: "My build",
		paintingLoading:
			"----------- Being generated. The larger the number of pictures, the longer it will take. It is expected to take 25S -----------",
		chooseModel: "Click on the model below to quickly chat with me",
		signinBenfits: "Sign in to receive benefits",
	},
	setting: {
		setting: "Setting",
		general: "General",
		advanced: "Advanced",
		config: "Config",
		avatarLink: "Avatar Link",
		name: "Name",
		description: "Description",
		role: "Role",
		resetUserInfo: "Reset UserInfo",
		chatHistory: "ChatHistory",
		theme: "Theme",
		language: "Language",
		api: "API",
		reverseProxy: "Reverse Proxy",
		timeout: "Timeout",
		socks: "Socks",
		httpsProxy: "HTTPS Proxy",
		balance: "API Balance",
		bindWechat: "Bind WeChat",
		boundedWechat: "Already bound to WeChat",
		clickBindWechat: "Click to bind WeChat",
		accountBalance: "Account balance",
		usageRecord: "My usage record on this site",
		basicModelPoints: "Basic model points",
		advancedModelPoints: "Advanced model points",
		basicModelUse: "Basic model uses",
		advancedModelUse: "Advanced model usage",
		paintingModelUse: "Points used for painting",
		personalCenter: "Personal center",
		personalCenterInfo: "Edit personal information and view more details",
		wallet: "My wallet",
		details: "My details",
		walletBalance: "User wallet balance",
		baseModelBalance: "Base model balance",
		advancedModelBalance: "Advanced model balance",
		paintingBalance: "MJ painting balance",
		pointsInfo: "Different models consume different points!",
		rechargeRecord: "Recharge record",
		orderNo: "Order number",
		rechargeType: "Recharge type",
		basicModelQuota: "Basic model quota",
		advancedModelQuota: "Advanced model quota",
		paintingQuota: "MJ painting quota",
		validityPeriod: "Validity period",
		rechargeTime: "Recharge time",
		membershipExpire: "Membership expiration time",
		packagePurchase: "Package purchase",
		bindWechatAccount: "Bind WeChat account",
		bindWechatInfo: "Open WeChat and scan the QR code to bind the account",
		please: "Please",
		pleaseExtra: " complete binding within time",
		signInRewards: "Sign-in rewards",
	},
	store: {
		siderButton: "Prompt Store",
		local: "Local",
		online: "Online",
		title: "Title",
		description: "Description",
		clearStoreConfirm: "Whether to clear the data?",
		importPlaceholder: "Please paste the JSON data here",
		addRepeatTitleTips: "Title duplicate, please re-enter",
		addRepeatContentTips: "Content duplicate: {msg}, please re-enter",
		editRepeatTitleTips: "Title conflict, please revise",
		editRepeatContentTips: "Content conflict {msg} , please re-modify",
		importError: "Key value mismatch",
		importRepeatTitle: "Title repeatedly skipped: {msg}",
		importRepeatContent: "Content is repeatedly skipped: {msg}",
		onlineImportWarning: "Note: Please check the JSON file source!",
		downloadError: "Please check the network status and JSON file validity",
	},
	member: {
		title: "Member store",
		desc: "Enjoy exploring, welcome to our online store, thank you for choosing us, and let us start a pleasant shopping journey together!",
		limitedPackages: "Limited time package for members",
		permanentPackages: "Stack permanent secondary cards",
		packageTitle: "Membership package details",
		baseModelQuota: "Basic model quota",
		advancedModelQuota: "Advanced model quota",
		mjPaintingQuota: "MJ painting quota",
		packageValid: "Package is valid for",
	},
	midJourney: {
		imageSize: "Image size",
		modelSelection: "Model selection",
		version: "Version",
		quality: "Quality",
		confusion: "Confusion",
		stylized: "Stylized",
		carryingParameters: "Carrying parameters",
		drawPicturesFromPictures: "Draw pictures from pictures",
		walletBalance: "Wallet balance",
		singlePaintingConsumption: "Single painting consumption",
		singleConsumptionImageToImage:
			"Single consumption per image-to-image generation",
		singleConsumptionUpscale: "Single consumption per upscaling",
		whatImageGen: "What image do you want to generate",
		unnecessary: "Unnecessary elements",
		promptPlaceholder:
			"For example: A cute little cat (Midjourney has certain restrictions on Chinese descriptors. We recommend that you click Translate on the right to convert your descriptors into English before submitting. Lenovo will hand over your descriptors to GPT for them to be used. Imagination Space creates a more detailed description for you based on this!)",
		unnecessaryPlaceholder:
			"Example: Generate a room picture, but no bed, you can fill in the bed!",
		translate: "Translate",
		lenovo: "Lenovo",
		submit: "Submit painting assignment",
		work: "What's at work",
		drawing: "My drawing",
		noTask: "There are currently no tasks",
		imageInput: "Click or drag an image here as input",
		fileFormats: "Supports PNG and JPG formats",
		refresh: "Refresh",
		imageToolTip: "Parameter explanation: Generate image size ratio",
		modelSelection1ToolTip: "MJ: Partially realistic general model",
		modelSelection2ToolTip:
			"NIJI: Animation style, suitable for two-dimensional models",
		confusionToolTip1: "Value range: 0-100, --chaos or --c",
		confusionToolTip2:
			"The level of chaos can be understood as the space for AI to have unbridled ideas. The smaller the value, the more reliable it is.",
		confusionToolTip3: "The default value is 0, which is the most accurate.",
		stylizedToolTip1: "Stylization: --stylize or --s, range 1-1000",
		stylizedToolTip2:
			"Parameter explanation: The higher the value, the richer and more artistic the picture performance will be.",
		carryingParameterToolTip1: "Whether to automatically carry parameters",
		carryingParameterToolTip2: "Open: carry the parameters we configured above",
		carryingParameterToolTip3:
			"Close: Use our custom parameters in the directive",
		refreshToolTip: "Painting account information",
		style: "Style",
		inProgress: "tasks in progress",
		current: "Current",
		noDrawing: "No drawing yet",
	},
	aiShop: {
		title: "Welcome to Pockyt AI shop",
		subTitle: "Choose your agent",
		aiConvo: "Ai conversation",
		aiPaint: "Ai painting",
		allCat: "All categories",
		writing: "Writing",
		program: "Program",
		companion: "Emotional companion",
		work: "Work",
		life: "Life",
		mindMap: "思维导图",
	},
	appStore: {
		tips: "In the current mode, use the application directly here, and the application added to the personal workbench will be used in conjunction with the conversation window, which is more convenient. You can also go there",
		workbench: "Personal workbench",
		create: "Create your custom exclusive application",
		clearContent: "Clear content",
		complianceMobile: "Please use it compliantly",
		compliance:
			"Please use the A function legally and compliantly, and check the generated content by yourself. You will bear the relevant responsibilities by yourself.",
		remainingBalance: "remaining balance",
		consumeAmount:
			"Each creation consumes 1 point, and each creation will produce new content",
		createNow: "Create now",
		consumeCreateAmount: "Consumption of 1 ordinary point amount",
		exampleRequirements: "Example Requirements",
		smartContinuation: "Smart Continuation",
		recreate: "recreate",
		copy: "Copy copy",
		unusedApp: "You haven't used this application yet, come and try it",
	},
	inpaint: {
		testMode: "Current test mode",
		switch: "switch to",
		model: "model",
		opArea: "Operation area",
		return: "Return to previous step",
		clear: "Clear the canvas",
		eraser: "Switch eraser mode",
		currentMode: "current mode",
		preview: "preview area",
		getMaskLayer: "Get mask layer",
		originalInfo: "Picture original information",
		width: "width",
		height: "height",
		zoomRatio: "zoom ratio",
	},
	market: {
		aiPaintingSquare: "AI Painting Square",
		sizeAdjust: "size adjustment",
		keywordSearch: "Keyword search",
	},
	cardItem: {
		drawFailed: "Drawing failed",
		refundBalance: "The balance has been refunded to your account",
		enlarge: "enlarge",
		parameterExplain:
			"Parameter explanation: Enlarge a certain picture, such as U1, enlarge the first picture, and so on",
		regen: "Regenerate once",
		transform: "Transform",
		parameterExplainRegen:
			"Parameter explanation: Regenerate based on a certain picture. For example, V1 transforms the first picture, and so on",
		selectSet: "Select the set of pictures",
		pictureEnlarge: "Picture to enlarge",
		pictureTransform: "Picture to transform",
		pictureRegen: "The picture is being regenerated",
		drawingQuickly: "Drawing quickly",
		tryAgain: "Execution: Try again with another prompt word!",
		superior: "superior",
		loading: "Loading...",
		zoom: "zoom",
		parameterExplainZoom:
			"Parameter explanation: Zoom infinitely zooms the current picture",
		adjust: "adjust",
		parameterExplainAdjust:
			"Parameter explanation: Vary adjusts the image based on the current image",
		enhancedInfo: "Significantly enhanced based on the current image",
		adjustInfo: "Subtle adjustments based on the current image",
	},
	mind: {
		needs: "Your needs",
		placeholderDescription:
			"Please enter a simple description of the content you want to generate, and AI will output a complete markdown content and its mind map for you",
		intelligentGeneration: "Intelligent generation generates mind maps",
		contentReq: "Content requirements",
		tryExample: "Try the example",
		placeholderMarkdown:
			"Please use markdown syntax to enter the content you want to generate a mind map or use the description above to let AI help you improve it",
		consumeAmount: "Each use consumes basic points",
		export: "Export",
		map: "Mind Map",
	},
	mjDdraw: {
		aiProf: "AI Painting Professional Edition",
		aiProfDes:
			"The painting time of the professional version is estimated to be 60~80 seconds. Please wait patiently. Your descriptors will be converted into English by us. Please be aware that please draw rationally. If sensitive words are triggered, your account will be banned directly. Please use the tool rationally! ",
		mjPaintCost:
			"Each painting or image variation will deduct an MJ Painting balance. Enlarging the image is free and your balance will not be deducted! ",
		changeEx: "Change example",
		promptEx: "Prompt example",
		placeholderPrompt:
			"Please enter the prompt word, you can refer to the above prompt word, we will convert your description word into English!",
		genPic: "Generate picture",
		modifierRef: "modifier reference",
		modifierDes:
			"You can refer to or choose the following types of modifiers to enrich your input text and try to generate more diverse images. For more modifiers, please refer to the Prompt Guide or Free Input to explore more unknown capabilities in large model painting",
		imageType: "image type",
		timePrompt:
			"Being generated, the larger the number of pictures, the longer it will take, estimated to be 15S",
		publicGen: "Public generation",
		empty: "No data yet~",
		gen: "my generation",
		freeDraw: "Draw this picture into a single complete picture [free]",
		variations:
			"Make variations based on this picture and generate new pictures based on this",
		previewLarge: "Click to preview to enlarge the picture",
	},
	share: {
		referral: "Referral Plan",
		joinUs:
			"Join us and share success! Welcome to our distribution page, become our partner, and create a better future together! ",
		rookieRec: "rookie recommendation officer",
		myRec: "My recommendation",
		yuan: "yuan",
		remainingWithdrawal: "remaining withdrawal amount",
		amountWithdrawn: "Withdrawal amount",
		immediateWithdraw: "Withdraw immediately",
		lowest: "lowest",
		orderQuantity: "Purchase order quantity",
		linkVisits: "Number of promotional link visits",
		registeredUser: "Registered user",
		earnings: "referral earnings",
		recommendDes:
			"Commission amount will be returned after the recommended user registers and purchases the product",
		percent: "Percent",
		applySeniorAgent: "Apply to become a senior agent",
		contactSeniorAgent:
			"Contact the webmaster to apply for a senior agent to enjoy super high commission",
		partnerJoin: "Join us as a partner",
		partnerJoinDes:
			"Join us as a partner to run the community together and achieve win-win cooperation! ",
		win: "Win-win cooperation and progress together",
		recLink: "recommended link",
		apply: "Apply",
		recRecord: "Recommendation record",
		recWithdraw: "Withdrawal record",
		regUser: "Registered user",
		invite:
			"Invite friends, get free package card keys, and enjoy recharge rebates! ",
		inviteLink: "invitation link",
		copy: "copy",
		bothParties:
			"Both parties who invite friends can enjoy a certain amount of permanent secondary card rewards",
		rechargeFriend:
			"Invite friends to recharge and you can get the recharge amount",
		rebate: "rebate",
	},
	userCenter: {
		changePassword: "Change your password",
		oldPassword: "Old password",
		newPassword: "New Password",
		confirmPassword: "Confirm password",
		relogin: "You will log in again after updating your password!",
		updatePassword: "Update your password",
		passwordReq: "Password requirement",
		newPasswordReq: "The new password must meet all the following requirements",
		minChar: "At least 6 characters",
		maxChar: "Maximum 30 characters",
		minNum: "At least one number",
		inviteUsers: "Invite users and get benefits!",
		inviteCode: "My invitation code",
		exclusiveInviteCode: "Generate exclusive invitation code",
		copyExclusicInviteCode: "Copy exclusive invitation link",
		inviteUserToGive: "Invite a user to give",
		pointBaseModelAmount: "Point base model amount",
		pointAdvancedModelQuota: "Points advanced model quota",
		mjPaintingPoints: "MJ Painting Points Amount",
		usersWhoReceieveInvitations: "Users who receive invitations receive",
		inviteRecord: "invitation record",
	},
};
