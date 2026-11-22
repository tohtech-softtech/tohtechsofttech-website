import { MemberCard } from "../member-card";

type PipeDirection = "top" | "bottom" | "left" | "right";
type StampType = 0 | 1;

/**
 * 直管パイプ
 */
function StraightPipeGraphic({
	vertical = false,
	flexible = false,
	length = 100,
	pipeWidth = 14,
	strokeWidth = 1.5,
	closed = false,
	class: className,
}: {
	vertical?: boolean;
	flexible?: boolean;
	length?: number;
	pipeWidth?: number;
	strokeWidth?: number;
	closed?: boolean;
	class?: string;
}) {
	const viewBox = flexible
		? vertical
			? `0 0 ${pipeWidth} 100`
			: `0 0 100 ${pipeWidth}`
		: `0 0 ${vertical ? pipeWidth : length} ${vertical ? length : pipeWidth}`;

	const d = flexible
		? vertical
			? closed
				? `M 0 0 V 100 M ${pipeWidth} 0 V 100 M 0 0 H ${pipeWidth} M 0 100 H ${pipeWidth}`
				: `M 0 0 V 100 M ${pipeWidth} 0 V 100`
			: closed
				? `M 0 0 H 100 M 0 ${pipeWidth} H 100 M 0 0 V ${pipeWidth} M 100 0 V ${pipeWidth}`
				: `M 0 0 H 100 M 0 ${pipeWidth} H 100`
		: vertical
			? closed
				? `M 0 0 V ${length} M ${pipeWidth} 0 V ${length} M 0 0 H ${pipeWidth} M 0 ${length} H ${pipeWidth}`
				: `M 0 0 V ${length} M ${pipeWidth} 0 V ${length}`
			: closed
				? `M 0 0 H ${length} M 0 ${pipeWidth} H ${length} M 0 0 V ${pipeWidth} M ${length} 0 V ${pipeWidth}`
				: `M 0 0 H ${length} M 0 ${pipeWidth} H ${length}`;

	const baseClass = flexible
		? vertical
			? "member-sorai__pipe-svg member-sorai__pipe-svg--v-flex"
			: "member-sorai__pipe-svg member-sorai__pipe-svg--h-flex"
		: vertical
			? "member-sorai__pipe-svg member-sorai__pipe-svg--v-fixed"
			: "member-sorai__pipe-svg member-sorai__pipe-svg--h-fixed";

	return (
		<svg
			viewBox={viewBox}
			preserveAspectRatio={flexible ? "none" : undefined}
			xmlns="http://www.w3.org/2000/svg"
			class={className ? `${baseClass} ${className}` : baseClass}
			aria-hidden="true"
		>
			<path
				stroke="currentColor"
				stroke-width={strokeWidth}
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				d={d}
			/>
		</svg>
	);
}

/**
 * 90度エルボ継手
 */
function ElbowGraphic({
	from = "bottom",
	to = "left",
	strokeWidth = 1.5,
	closed = true,
	class: className,
}: {
	from?: PipeDirection;
	to?: PipeDirection;
	strokeWidth?: number;
	closed?: boolean;
	class?: string;
}) {
	const ports = new Set([from, to]);
	let modifier = "member-sorai__pipe-svg--elbow-bottom-left";

	if (ports.has("top") && ports.has("right")) {
		modifier = "member-sorai__pipe-svg--elbow-top-right";
	} else if (ports.has("top") && ports.has("left")) {
		modifier = "member-sorai__pipe-svg--elbow-top-left";
	} else if (ports.has("bottom") && ports.has("right")) {
		modifier = "member-sorai__pipe-svg--elbow-bottom-right";
	}

	const dOuter = "M 0 10 H 3 L 4 12 H 8 A 18 18 0 0 1 26 30 V 34 L 28 35 V 38";
	const dInner = "M 0 28 H 3 L 4 26 H 6 A 6 6 0 0 1 12 32 V 34 L 10 35 V 38";
	const dRibs = "M 4 12 V 26 M 12 34 H 26";
	const dClosed = closed ? "M 0 10 V 28 M 10 38 H 28" : "";

	return (
		<svg
			viewBox="0 0 38 38"
			xmlns="http://www.w3.org/2000/svg"
			class={
				className
					? `member-sorai__pipe-svg member-sorai__pipe-svg--fitting ${modifier} ${className}`
					: `member-sorai__pipe-svg member-sorai__pipe-svg--fitting ${modifier}`
			}
			aria-hidden="true"
		>
			<path
				stroke="currentColor"
				stroke-width={strokeWidth}
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				d={`${dOuter} ${dInner} ${dRibs} ${dClosed}`.trim()}
			/>
		</svg>
	);
}

/**
 * チーズ
 */
function CheeseGraphic({
	passThrough = "vertical",
	branch = "right",
	strokeWidth = 1.5,
	closed = true,
	class: className,
}: {
	passThrough?: "vertical" | "horizontal";
	branch?: PipeDirection;
	strokeWidth?: number;
	closed?: boolean;
	class?: string;
}) {
	let modifier = "member-sorai__pipe-svg--cheese-h-bottom";
	if (passThrough === "vertical" && branch === "right") {
		modifier = "member-sorai__pipe-svg--cheese-v-right";
	} else if (passThrough === "vertical" && branch === "left") {
		modifier = "member-sorai__pipe-svg--cheese-v-left";
	} else if (passThrough === "horizontal" && branch === "top") {
		modifier = "member-sorai__pipe-svg--cheese-h-top";
	}

	const baseDim = 26;
	const actualSize = 38;
	const sx = actualSize / baseDim;
	const sy = actualSize / baseDim;
	const r = (val: number) => Math.round(val * 100) / 100;
	const px = (origX: number) => r((origX - 10) * sx);
	const py = (origY: number) => r((origY - 4) * sy);

	const dTop = `M ${px(10)} ${py(10)} V ${py(9)} H ${px(11)} L ${px(13)} ${py(10)} H ${px(33)} L ${px(35)} ${py(9)} H ${px(36)} V ${py(10)}`;
	const dBottomLeft = `M ${px(10)} ${py(24)} V ${py(25)} H ${px(11)} L ${px(13)} ${py(24)} H ${px(16)} V ${py(27)} L ${px(15)} ${py(29)} V ${py(30)} H ${px(16)}`;
	const dBottomRight = `M ${px(36)} ${py(24)} V ${py(25)} H ${px(35)} L ${px(33)} ${py(24)} H ${px(30)} V ${py(27)} L ${px(31)} ${py(29)} V ${py(30)} H ${px(30)}`;
	const dRibs = `M ${px(13)} ${py(10)} V ${py(24)} M ${px(33)} ${py(10)} V ${py(24)} M ${px(16)} ${py(28)} H ${px(30)}`;
	const dClosed = closed
		? `M ${px(10)} ${py(10)} V ${py(24)} M ${px(36)} ${py(10)} V ${py(24)} M ${px(16)} ${py(30)} H ${px(30)}`
		: "";
	const dArc = `M ${px(16)} ${py(24)} A ${r(25 * sx)} ${r(190 * sy)} 0 0 1 ${px(30)} ${py(24)}`;

	return (
		<svg
			viewBox="0 0 38 38"
			xmlns="http://www.w3.org/2000/svg"
			class={
				className
					? `member-sorai__pipe-svg member-sorai__pipe-svg--fitting ${modifier} ${className}`
					: `member-sorai__pipe-svg member-sorai__pipe-svg--fitting ${modifier}`
			}
			aria-hidden="true"
		>
			<path
				stroke="currentColor"
				stroke-width={strokeWidth}
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				d={`${dTop} ${dBottomLeft} ${dBottomRight} ${dRibs} ${dClosed}`.trim()}
			/>
			<path
				stroke="currentColor"
				stroke-width={Math.max(0.7, r(strokeWidth * 0.67))}
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				d={dArc}
			/>
		</svg>
	);
}

/**
 * 六角ナット継手
 */
function HexNutGraphic({
	orientation = "horizontal",
	strokeWidth = 1.5,
	class: className,
}: {
	orientation?: "horizontal" | "vertical";
	strokeWidth?: number;
	class?: string;
}) {
	const actualThickness = 12;
	const actualHeight = 30;
	const r = (val: number) => Math.round(val * 100) / 100;
	const x = (baseX: number) => r(((baseX - 6) / 22) * actualThickness);
	const y = (baseY: number) => r((baseY / 50) * actualHeight);

	const dOuter = `M ${x(10)} ${y(0)} H ${x(24)} L ${x(28)} ${y(5)} V ${y(45)} L ${x(24)} ${y(50)} H ${x(10)} L ${x(6)} ${y(45)} V ${y(5)} Z`;
	const dRidges = `M ${x(24)} ${y(0)} L ${x(28)} ${y(7)} L ${x(25)} ${y(14)} L ${x(28)} ${y(21)} V ${y(29)} L ${x(25)} ${y(36)} L ${x(28)} ${y(43)} L ${x(24)} ${y(50)} H ${x(10)} L ${x(6)} ${y(43)} L ${x(9)} ${y(36)} L ${x(6)} ${y(29)} V ${y(21)} L ${x(9)} ${y(14)} L ${x(6)} ${y(7)} L ${x(10)} ${y(0)} Z`;
	const dHLine = `M ${x(9)} ${y(14)} H ${x(25)} M ${x(9)} ${y(36)} H ${x(25)}`;

	const orientMod =
		orientation === "vertical" ? "member-sorai__pipe-svg--vertical" : "";

	return (
		<svg
			viewBox={`0 0 ${actualThickness} ${actualHeight}`}
			xmlns="http://www.w3.org/2000/svg"
			class={[
				"member-sorai__pipe-svg",
				"member-sorai__pipe-svg--hex-nut",
				orientMod,
				className,
			]
				.filter(Boolean)
				.join(" ")}
			aria-hidden="true"
		>
			<path
				stroke="currentColor"
				stroke-width={strokeWidth}
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				d={dOuter}
			/>
			<path
				stroke="currentColor"
				stroke-width={strokeWidth}
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				d={dRidges}
			/>
			<path
				stroke="currentColor"
				stroke-width={strokeWidth}
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				d={dHLine}
			/>
		</svg>
	);
}

/**
 * リング
 */
function RingGraphic({
	orientation = "horizontal",
	strokeWidth = 1.5,
	class: className,
}: {
	orientation?: "horizontal" | "vertical";
	strokeWidth?: number;
	class?: string;
}) {
	const actualThickness = 10;
	const actualHeight = 22;
	const sx = actualThickness / 22;
	const sy = actualHeight / 32;
	const r = (val: number) => Math.round(val * 100) / 100;
	const px = (origX: number) => r((origX - 9) * sx);
	const py = (origY: number) => r(origY * sy);

	const dOuter = `M ${px(18)} ${py(0)} H ${px(22)} L ${px(31)} ${py(4)} V ${py(28)} L ${px(22)} ${py(32)} H ${px(18)} L ${px(9)} ${py(28)} V ${py(4)} Z`;
	const dVerticals = `M ${px(17)} ${py(0)} V ${py(32)} M ${px(23)} ${py(0)} V ${py(32)}`;

	const orientMod =
		orientation === "vertical" ? "member-sorai__pipe-svg--vertical" : "";

	return (
		<svg
			viewBox={`0 0 ${actualThickness} ${actualHeight}`}
			xmlns="http://www.w3.org/2000/svg"
			class={[
				"member-sorai__pipe-svg",
				"member-sorai__pipe-svg--ring",
				orientMod,
				className,
			]
				.filter(Boolean)
				.join(" ")}
			aria-hidden="true"
		>
			<path
				stroke="currentColor"
				stroke-width={strokeWidth}
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				d={dOuter}
			/>
			<path
				stroke="currentColor"
				stroke-width={strokeWidth}
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				d={dVerticals}
			/>
		</svg>
	);
}

/**
 * ネジ山継手
 */
function ThreadGraphic({
	strokeWidth = 1.5,
	closed = false,
	class: className,
}: {
	strokeWidth?: number;
	closed?: boolean;
	class?: string;
}) {
	const actualHeight = 20;
	const targetLength = 18;
	const actualPitch = (actualHeight * 2) / 15;
	const crestDepth = actualHeight / 15;
	const ridgeStrokeWidth = Math.round(strokeWidth * 0.47 * 10) / 10;
	const actualTurns = Math.max(
		1,
		Math.round((targetLength - actualPitch / 2) / actualPitch),
	);
	const r = (val: number) => Math.round(val * 100) / 100;
	const totalWidth = r(actualTurns * actualPitch + actualPitch / 2);

	let dTop = "M 0 0";
	for (let i = 0; i < actualTurns; i++) {
		const midX = r(i * actualPitch + actualPitch / 2);
		const endX = r((i + 1) * actualPitch);
		dTop += ` L ${midX} ${r(crestDepth)} L ${endX} 0`;
	}

	let dBottom = `M ${r(actualPitch / 2)} ${r(actualHeight - crestDepth)}`;
	for (let i = 0; i < actualTurns; i++) {
		const peakX = r((i + 1) * actualPitch);
		const endX = r((i + 1) * actualPitch + actualPitch / 2);
		dBottom += ` L ${peakX} ${r(actualHeight)} L ${endX} ${r(actualHeight - crestDepth)}`;
	}

	let dRidges = "";
	for (let i = 0; i < actualTurns; i++) {
		const startX = r(i * actualPitch + actualPitch / 2);
		const endX = r((i + 1) * actualPitch);
		dRidges += `M ${startX} ${r(crestDepth)} L ${endX} ${r(actualHeight)} `;
	}

	const dClosed = closed
		? `M 0 0 L ${r(actualPitch / 2)} ${r(actualHeight - crestDepth)} M ${r(actualTurns * actualPitch)} 0 L ${totalWidth} ${r(actualHeight - crestDepth)}`
		: "";

	return (
		<svg
			viewBox={`0 0 ${totalWidth} ${actualHeight}`}
			xmlns="http://www.w3.org/2000/svg"
			class={
				className
					? `member-sorai__pipe-svg member-sorai__pipe-svg--thread ${className}`
					: "member-sorai__pipe-svg member-sorai__pipe-svg--thread"
			}
			aria-hidden="true"
		>
			<path
				stroke="currentColor"
				stroke-width={strokeWidth}
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				d={`${dTop} ${dBottom} ${dClosed}`.trim()}
			/>
			<path
				stroke="currentColor"
				stroke-width={ridgeStrokeWidth}
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				d={dRidges.trim()}
			/>
		</svg>
	);
}

/**
 * ユニオン複合継手
 */
function UnionGraphic({
	strokeWidth = 1.5,
	class: className,
}: {
	strokeWidth?: number;
	class?: string;
}) {
	const r = (val: number) => Math.round(val * 100) / 100;
	const hexPaths = (t: number, h: number) => {
		const x = (bx: number) => r(((bx - 6) / 22) * t);
		const y = (by: number) => r((by / 50) * h);
		const outer = `M ${x(10)} ${y(0)} H ${x(24)} L ${x(28)} ${y(5)} V ${y(45)} L ${x(24)} ${y(50)} H ${x(10)} L ${x(6)} ${y(45)} V ${y(5)} Z`;
		const ridges = `M ${x(24)} ${y(0)} L ${x(28)} ${y(7)} L ${x(25)} ${y(14)} L ${x(28)} ${y(21)} V ${y(29)} L ${x(25)} ${y(36)} L ${x(28)} ${y(43)} L ${x(24)} ${y(50)} H ${x(10)} L ${x(6)} ${y(43)} L ${x(9)} ${y(36)} L ${x(6)} ${y(29)} V ${y(21)} L ${x(9)} ${y(14)} L ${x(6)} ${y(7)} L ${x(10)} ${y(0)} Z`;
		const hLine = `M ${x(9)} ${y(14)} H ${x(25)} M ${x(9)} ${y(36)} H ${x(25)}`;
		return `${outer} ${ridges} ${hLine}`;
	};

	const padPath = (w: number, h: number, innerH: number) => {
		const innerTop = r((h - innerH) / 2);
		const innerBottom = r(h - innerTop);
		const x1 = r(w * 0.25);
		const x2 = r(w * 0.75);
		return `M 0 0 H ${x1} L ${x2} ${innerTop} H ${w} M 0 ${h} H ${x1} L ${x2} ${innerBottom} H ${w} M ${x1} 0 V ${h} M ${x2} ${innerTop} V ${innerBottom}`;
	};

	return (
		<svg
			viewBox="0 0 53.67 34"
			xmlns="http://www.w3.org/2000/svg"
			class={
				className
					? `member-sorai__pipe-svg member-sorai__pipe-svg--union ${className}`
					: "member-sorai__pipe-svg member-sorai__pipe-svg--union"
			}
			aria-hidden="true"
		>
			<g transform="translate(0, 7)">
				<path
					stroke="currentColor"
					stroke-width={strokeWidth}
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M 0 0 H 8 M 0 20 H 8 M 0 0 V 20 M 8 0 V 20"
				/>
			</g>
			<g transform="translate(8, 0)">
				<path
					stroke="currentColor"
					stroke-width={strokeWidth}
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					d={hexPaths(14, 34)}
				/>
			</g>
			<g transform="translate(22, 5)">
				<path
					stroke="currentColor"
					stroke-width={strokeWidth}
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					d={padPath(5, 24, 18)}
				/>
			</g>
			<g transform="translate(27, 3)">
				<path
					stroke="currentColor"
					stroke-width={strokeWidth}
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					d={hexPaths(8, 28)}
				/>
			</g>
			<g transform="translate(35, 5)">
				<path
					stroke="currentColor"
					stroke-width={strokeWidth}
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					d={padPath(4, 24, 20)}
				/>
			</g>
			<g transform="translate(39, 7)">
				<path
					stroke="currentColor"
					stroke-width={strokeWidth}
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M 0 0 L 1.33 1.33 L 2.67 0 L 4 1.33 L 5.33 0 L 6.67 1.33 L 8 0 L 9.33 1.33 L 10.67 0 L 12 1.33 L 13.33 0 M 1.33 18.67 L 2.67 20 L 4 18.67 L 5.33 20 L 6.67 18.67 L 8 20 L 9.33 18.67 L 10.67 20 L 12 18.67 L 13.33 20 L 14.67 18.67 M 0 0 L 1.33 18.67 M 13.33 0 L 14.67 18.67"
				/>
				<path
					stroke="currentColor"
					stroke-width={0.7}
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M 1.33 1.33 L 2.67 20 M 4 1.33 L 5.33 20 M 6.67 1.33 L 8 20 M 9.33 1.33 L 10.67 20 M 12 1.33 L 13.33 20"
				/>
			</g>
		</svg>
	);
}

/**
 * StampGraphic
 */
function StampGraphic({
	idSuffix,
	text,
	type = 1,
	bleed = true,
	class: className,
}: {
	idSuffix: string;
	text: string;
	type?: StampType;
	bleed?: boolean;
	class?: string;
}) {
	const maskId = `sr-stamp-mask-${idSuffix}`;
	const filterId = `sr-stamp-bleed-${idSuffix}`;
	const stainFilterId = `sr-stamp-stain-${idSuffix}`;
	const mottleMaskId = `sr-stamp-mottle-${idSuffix}`;
	const isHakubun = type === 1;
	const shouldCompress = text.length > 7;

	return (
		<svg
			viewBox="-1 -1 52 19"
			xmlns="http://www.w3.org/2000/svg"
			class={
				className
					? `member-sorai__stamp-svg ${className}`
					: "member-sorai__stamp-svg"
			}
			aria-hidden="true"
		>
			<defs>
				{bleed && (
					<filter id={filterId} x="-15%" y="-15%" width="130%" height="130%">
						<feTurbulence
							type="fractalNoise"
							baseFrequency="0.07"
							numOctaves={1}
							result="noise"
						/>
						<feDisplacementMap
							in="SourceGraphic"
							in2="noise"
							scale={0.8}
							xChannelSelector="R"
							yChannelSelector="G"
						/>
					</filter>
				)}

				<filter id={stainFilterId} x="0%" y="0%" width="100%" height="100%">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.09"
						numOctaves={3}
						result="blobs"
					/>
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.55"
						numOctaves={2}
						result="grain"
					/>
					<feComposite
						in="blobs"
						in2="grain"
						operator="arithmetic"
						k1={0}
						k2={0.75}
						k3={0.25}
						k4={0}
						result="mixed"
					/>
					<feColorMatrix type="saturate" values="0" in="mixed" result="gray" />
					<feComponentTransfer in="gray">
						<feFuncR type="linear" slope={0.0001} intercept={0.9999} />
						<feFuncG type="linear" slope={0.0001} intercept={0.9999} />
						<feFuncB type="linear" slope={0.0001} intercept={0.9999} />
					</feComponentTransfer>
				</filter>

				<mask id={mottleMaskId}>
					<rect
						x="-2"
						y="-2"
						width="56"
						height="23"
						fill="#ffffff"
						filter={`url(#${stainFilterId})`}
					/>
				</mask>

				{isHakubun && (
					<mask id={maskId}>
						<rect x="-1" y="-1" width="52" height="19" fill="#ffffff" />
						<text
							x="25"
							y="8.5"
							text-anchor="middle"
							dominant-baseline="central"
							fill="#000000"
							stroke="#000000"
							stroke-width="0.2"
							class="member-sorai__stamp-text"
							textLength={shouldCompress ? 40 : undefined}
							lengthAdjust={shouldCompress ? "spacingAndGlyphs" : undefined}
						>
							{text}
						</text>
					</mask>
				)}
			</defs>

			<g
				filter={bleed ? `url(#${filterId})` : undefined}
				mask={`url(#${mottleMaskId})`}
			>
				{isHakubun ? (
					<g>
						<rect
							x="0"
							y="0"
							width="50"
							height="17"
							rx="5"
							ry="5"
							fill="none"
							stroke="currentColor"
							stroke-width="1.3"
						/>
						<rect
							x="1.5"
							y="1.5"
							width="47"
							height="14"
							rx="3.8"
							ry="3.8"
							fill="currentColor"
							mask={`url(#${maskId})`}
						/>
					</g>
				) : (
					<g>
						<rect
							x="0"
							y="0"
							width="50"
							height="17"
							rx="5"
							ry="5"
							fill="none"
							stroke="currentColor"
							stroke-width="1.2"
						/>
						<text
							x="25"
							y="8.5"
							text-anchor="middle"
							dominant-baseline="central"
							fill="currentColor"
							class="member-sorai__stamp-text"
							textLength={shouldCompress ? 40 : undefined}
							lengthAdjust={shouldCompress ? "spacingAndGlyphs" : undefined}
						>
							{text}
						</text>
					</g>
				)}
			</g>
		</svg>
	);
}

/**
 * StainGraphic
 */
function StainGraphic({ class: className }: { class?: string }) {
	return (
		<div
			class={
				className
					? `member-sorai__texture member-sorai__texture--stain ${className}`
					: "member-sorai__texture member-sorai__texture--stain"
			}
			aria-hidden="true"
		>
			<svg
				viewBox="0 0 500 500"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				class="member-sorai__texture-svg"
				aria-hidden="true"
			>
				<filter id="soraiOrganicPaper">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.015"
						numOctaves="5"
						result="blobs"
					/>
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.8"
						numOctaves="3"
						result="grain"
					/>
					<feComposite
						in="blobs"
						in2="grain"
						operator="arithmetic"
						k1="0"
						k2="1"
						k3="0.2"
						k4="0"
						result="mixed"
					/>
					<feColorMatrix type="saturate" values="0" />
					<feComponentTransfer>
						<feFuncR type="linear" slope="2" intercept="-0.5" />
						<feFuncG type="linear" slope="2" intercept="-0.5" />
						<feFuncB type="linear" slope="2" intercept="-0.5" />
					</feComponentTransfer>
				</filter>
				<rect
					width="100%"
					height="100%"
					filter="url(#soraiOrganicPaper)"
					opacity="0.14"
				/>
			</svg>
		</div>
	);
}

/**
 * NoiseGraphic
 */
function NoiseGraphic({ class: className }: { class?: string }) {
	return (
		<div
			class={
				className
					? `member-sorai__texture member-sorai__texture--noise ${className}`
					: "member-sorai__texture member-sorai__texture--noise"
			}
			aria-hidden="true"
		>
			<svg
				viewBox="0 0 250 250"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				class="member-sorai__texture-svg"
				aria-hidden="true"
			>
				<filter id="soraiReproNoise">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.85"
						numOctaves="4"
						stitchTiles="stitch"
						result="rawNoise"
					/>
					<feColorMatrix
						in="rawNoise"
						type="saturate"
						values="0"
						result="monoNoise"
					/>
					<feComponentTransfer in="monoNoise">
						<feFuncR type="linear" slope="8" intercept="-3.5" />
						<feFuncG type="linear" slope="8" intercept="-3.5" />
						<feFuncB type="linear" slope="8" intercept="-3.5" />
						<feFuncA type="linear" slope="0.5" intercept="0" />
					</feComponentTransfer>
				</filter>
				<rect width="100%" height="100%" filter="url(#soraiReproNoise)" />
			</svg>
		</div>
	);
}

export function SoraiMemberCard() {
	return (
		<MemberCard class="member-sorai">
			<StainGraphic />
			<NoiseGraphic />

			<div class="member-sorai__card-stamp">
				<StampGraphic idSuffix="seal" text="2ND YEAR" type={1} />
			</div>

			<div class="member-sorai__pipe-frame">
				<div class="member-sorai__pipe-row member-sorai__pipe-row--top">
					<ElbowGraphic from="right" to="bottom" />
					<div class="member-sorai__pipe-track">
						<StraightPipeGraphic flexible />
						<div class="member-sorai__pipe-joint member-sorai__pipe-joint--top-union">
							<UnionGraphic />
						</div>
						<div class="member-sorai__pipe-joint member-sorai__pipe-joint--top-nut">
							<HexNutGraphic />
						</div>
					</div>
					<ElbowGraphic from="left" to="top" />
				</div>

				<div class="member-sorai__content-row member-sorai__content-row--upper">
					<div class="member-sorai__pipe-col">
						<StraightPipeGraphic vertical flexible />
						<div class="member-sorai__pillar-joint">
							<HexNutGraphic orientation="vertical" />
						</div>
					</div>

					<div class="member-sorai__dossier-box member-sorai__dossier-box--upper">
						<div class="member-sorai__identity">
							<div class="member-sorai__portrait">
								<div class="member-sorai__portrait-inner">
									<img
										src="/members/icons/sorai-loop.png"
										alt="Sorai"
										class="member-sorai__portrait-image"
										loading="lazy"
									/>
								</div>
							</div>

							{/* H.N. & Sorai */}
							<div class="member-sorai__nameplate">
								<h3 class="member-sorai__name">
									<span class="member-sorai__name-prefix">H.N.</span>
									<a
										href="https://sudo-sorai.dev"
										target="_blank"
										rel="noopener noreferrer"
										class="member-sorai__name-link"
										aria-label="sudo-sorai.devを開く"
									>
										Sorai
									</a>
								</h3>
							</div>
						</div>
					</div>
				</div>

				<div class="member-sorai__pipe-row member-sorai__pipe-row--branch">
					<CheeseGraphic passThrough="vertical" branch="right" closed={true} />
					<div class="member-sorai__pipe-track">
						<StraightPipeGraphic flexible />
						<div class="member-sorai__joint-group member-sorai__joint-group--left">
							<ThreadGraphic />
							<HexNutGraphic />
						</div>
						<div class="member-sorai__joint-group member-sorai__joint-group--right">
							<RingGraphic />
							<HexNutGraphic />
						</div>
					</div>
				</div>

				<div class="member-sorai__content-row member-sorai__content-row--lower">
					<div class="member-sorai__pipe-col">
						<StraightPipeGraphic vertical flexible />
						<div class="member-sorai__pillar-joint">
							<RingGraphic orientation="vertical" />
						</div>
					</div>

					<div class="member-sorai__dossier-box member-sorai__dossier-box--lower">
						<div class="member-sorai__bio-box">
							<p class="member-sorai__bio">
								ロマン駆動の技術大好きマン
							</p>
						</div>

						<a
							href="https://sudo-sorai.dev"
							target="_blank"
							rel="noopener noreferrer"
							class="member-sorai__site-link"
							aria-label="sudo-sorai.dev を新しいタブで開く"
						>
							<span class="member-sorai__paper-clip" aria-hidden="true" />
							<span class="member-sorai__site-domain">sudo-sorai.dev</span>
							<span class="member-sorai__site-arrow" aria-hidden="true">
								↗
							</span>
						</a>
					</div>
				</div>

				{/* エルボ巻き上げフック */}
				<div class="member-sorai__pipe-row member-sorai__pipe-row--bottom">
					<ElbowGraphic from="top" to="right" />
					<div class="member-sorai__bottom-pipe-segment">
						<StraightPipeGraphic length={32} />
					</div>
					<ElbowGraphic from="left" to="top" />
				</div>
			</div>
		</MemberCard>
	);
}

export default SoraiMemberCard;
