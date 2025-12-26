import SkillsInfoBlock from "./components/SkillsInfoBlock.tsx";
import { Skill } from "../../../types";
import { Grid, Typography } from "@mui/material";

// Import Logos
import * as languageLogos from "../../../assets/skills/languages/index.ts";
import * as frameworkLogos from "../../../assets/skills/frameworks/index.ts";
import * as libraryLogos from "../../../assets/skills/libraries/index.ts";
import * as developerToolLogos from "../../../assets/skills/developerTools/index.ts";

const SkillsSection = () => {
	// Data arrays for each section
	const languages: Skill[] = [
		{ name: "C", logo: languageLogos.c, url: "https://www.cprogramming.com" } as Skill,
		{ name: "C++", logo: languageLogos.cPlusPlus, url: "https://en.wikipedia.org/wiki/C%2B%2B" } as Skill,
		{ name: "C#", logo: languageLogos.cSharp, url: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" } as Skill,
		{ name: "Python", logo: languageLogos.python, url: "https://www.python.org" } as Skill,
		{ name: "Java", logo: languageLogos.java, url: "https://en.wikipedia.org/wiki/Java_(programming_language)" } as Skill,
		{ name: "JavaScript", logo: languageLogos.javascript, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" } as Skill,
		{ name: "TypeScript", logo: languageLogos.typescript, url: "https://www.typescriptlang.org/" } as Skill,
		{ name: "PHP", logo: languageLogos.php, url: "https://www.php.net/" } as Skill,
		{ name: "HTML", logo: languageLogos.html, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" } as Skill,
		{ name: "CSS", logo: languageLogos.css, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" } as Skill,
		{ name: "XAML", logo: languageLogos.xaml, url: "https://learn.microsoft.com/en-us/dotnet/desktop/wpf/xaml/" } as Skill,
		{ name: "SQL", logo: languageLogos.sql, url: "https://en.wikipedia.org/wiki/SQL" } as Skill,
		{ name: "GraphQL", logo: languageLogos.graphql, url: "https://graphql.org/" } as Skill,
		{ name: "Racket", logo: languageLogos.racket, url: "https://racket-lang.org/" } as Skill,
	];

	const frameworks: Skill[] = [
		{ name: "Node.js", logo: frameworkLogos.nodeJS, url: "https://en.wikipedia.org/wiki/Node.js" } as Skill,
		{ name: "Next.js", logo: frameworkLogos.nextJS, url: "https://nextjs.org/" } as Skill,
		{ name: "Express.js", logo: frameworkLogos.expressJS, url: "https://expressjs.com/" } as Skill,
		{ name: "Processing.js", logo: frameworkLogos.processingJS, url: "https://processing.org/" } as Skill,
		{ name: "Tailwind CSS", logo: frameworkLogos.tailwindCSS, url: "https://tailwindcss.com/" } as Skill,
		{ name: ".NET", logo: frameworkLogos.dotNet, url: "https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet" } as Skill,
		{ name: "Xamarin", logo: frameworkLogos.xamarin, url: "https://dotnet.microsoft.com/apps/xamarin" } as Skill,
		{ name: "xUnit", logo: frameworkLogos.xUnit, url: "https://xunit.net/" } as Skill,
		{ name: "Jest", logo: frameworkLogos.jest, url: "https://jestjs.io/" } as Skill,
	];

	const libraries: Skill[] = [
		{ name: "React", logo: libraryLogos.react, url: "https://react.dev/" } as Skill,
		{ name: "Redux", logo: libraryLogos.redux, url: "https://redux.js.org/" } as Skill,
		{ name: "TensorFlow", logo: libraryLogos.tensorflow, url: "https://www.tensorflow.org/" } as Skill,
		{ name: "PyTorch", logo: libraryLogos.pytorch, url: "https://pytorch.org/" } as Skill,
		{ name: "NumPy", logo: libraryLogos.numpy, url: "https://numpy.org/" } as Skill,
		{ name: "Matplotlib", logo: libraryLogos.matplotlib, url: "https://matplotlib.org/" } as Skill,
		{ name: "Animate On Scroll", logo: libraryLogos.aos, url: "https://michalsnik.github.io/aos/" } as Skill,
		{ name: "OpenCV", logo: libraryLogos.openCV, url: "https://opencv.org/" } as Skill,
		{ name: "Material UI", logo: libraryLogos.materialUI, url: "https://mui.com/material-ui/" } as Skill,
	];

	const developerTools: Skill[] = [
		{ name: "Git", logo: developerToolLogos.git, url: "https://git-scm.com/" } as Skill,
		{ name: "Docker", logo: developerToolLogos.docker, url: "https://en.wikipedia.org/wiki/Docker_(software)" } as Skill,
		{ name: "Kubernetes", logo: developerToolLogos.kubernetes, url: "https://kubernetes.io/" } as Skill,
		{ name: "Linux", logo: developerToolLogos.linux, url: "https://en.wikipedia.org/wiki/Linux" } as Skill,
		{ name: "Bash", logo: developerToolLogos.bash, url: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)" } as Skill,
		{ name: "Vim", logo: developerToolLogos.vim, url: "https://en.wikipedia.org/wiki/Vim_(text_editor)" } as Skill,
		{ name: "MySQL", logo: developerToolLogos.mySQL, url: "https://en.wikipedia.org/wiki/MySQL" } as Skill,
		{ name: "SQLite", logo: developerToolLogos.sqLite, url: "https://www.sqlite.org/" } as Skill,
		{ name: "Postman", logo: developerToolLogos.postman, url: "https://www.postman.com/" } as Skill,
		{ name: "Swagger", logo: developerToolLogos.swagger, url: "https://swagger.io/" } as Skill,
		{ name: "Visual Studio", logo: developerToolLogos.visualStudio, url: "https://visualstudio.microsoft.com/" } as Skill,
		{ name: "VS Code", logo: developerToolLogos.vsCode, url: "https://en.wikipedia.org/wiki/Visual_Studio_Code" } as Skill,
		{ name: "xCode", logo: developerToolLogos.xCode, url: "https://developer.apple.com/xcode/" } as Skill,
		{ name: "Terminal", logo: developerToolLogos.terminal, url: "https://learn.microsoft.com/en-us/windows/terminal/" } as Skill,
		{ name: "Powershell", logo: developerToolLogos.powershell, url: "https://learn.microsoft.com/en-us/powershell/" } as Skill,
		{ name: "Figma", logo: developerToolLogos.figma, url: "https://www.figma.com/" } as Skill,
		{ name: "Storybook", logo: developerToolLogos.storybook, url: "https://storybook.js.org/" } as Skill,
		{ name: "Unity", logo: developerToolLogos.unity, url: "https://unity.com/" } as Skill,
		{ name: "cURL", logo: developerToolLogos.curl, url: "https://curl.se/" } as Skill,
		{ name: "SSH", logo: developerToolLogos.ssh, url: "https://en.wikipedia.org/wiki/Secure_Shell" } as Skill,
		{ name: "RDP", logo: developerToolLogos.rdp, url: "https://en.wikipedia.org/wiki/Remote_Desktop_Protocol" } as Skill,
		{ name: "Copilot", logo: developerToolLogos.copilot, url: "https://copilot.microsoft.com/" } as Skill,
		{ name: "OpenAI", logo: developerToolLogos.openAI, url: "https://openai.com/" } as Skill,
		{ name: "GitHub Actions", logo: developerToolLogos.githubActions, url: "https://github.com/features/actions" } as Skill,
		{ name: "Netlify", logo: developerToolLogos.netlify, url: "https://www.netlify.com/" } as Skill,
		{ name: "Microsoft 365", logo: developerToolLogos.microsoft365, url: "https://www.microsoft.com/en-ca/microsoft-365" } as Skill,
		{ name: "Microsoft Azure", logo: developerToolLogos.microsoftAzure, url: "https://azure.microsoft.com/en-ca" } as Skill,
		{ name: "Azure DevOps", logo: developerToolLogos.azureDevOps, url: "https://azure.microsoft.com/en-us/products/devops" } as Skill,
		{ name: "Jira", logo: developerToolLogos.jira, url: "https://www.atlassian.com/software/jira" } as Skill,
	];

	return (
		<section id={"skills"}>
			<Grid container size={12} justifyContent={"center"} spacing={3} padding={3}>
				<Typography variant={"h4"} color={"primary.main"}>
					Skills
				</Typography>
				<Grid container size={12} spacing={3} data-aos={"zoom-in"} data-aos-once={"true"}>
					<Typography variant={"h5"}>Languages:</Typography>
					<SkillsInfoBlock skills={languages} />
				</Grid>
				<Grid container size={12} spacing={3} data-aos={"zoom-in"} data-aos-once={"true"}>
					<Typography variant={"h5"}>Frameworks:</Typography>
					<SkillsInfoBlock skills={frameworks} />
				</Grid>
				<Grid container size={12} spacing={3} data-aos={"zoom-in"} data-aos-once={"true"}>
					<Typography variant={"h5"}>Libraries:</Typography>
					<SkillsInfoBlock skills={libraries} />
				</Grid>
				<Grid container size={12} spacing={3} data-aos={"zoom-in"} data-aos-once={"true"}>
					<Typography variant={"h5"}>Developer Tools:</Typography>
					<SkillsInfoBlock skills={developerTools} />
				</Grid>
			</Grid>
		</section>
	);
};

export default SkillsSection;
