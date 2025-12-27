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
		{ name: "C", logo: languageLogos.c, url: "https://www.cprogramming.com" },
		{ name: "C++", logo: languageLogos.cPlusPlus, url: "https://en.wikipedia.org/wiki/C%2B%2B" },
		{ name: "C#", logo: languageLogos.cSharp, url: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" },
		{ name: "Python", logo: languageLogos.python, url: "https://www.python.org" },
		{ name: "Java", logo: languageLogos.java, url: "https://en.wikipedia.org/wiki/Java_(programming_language)" },
		{ name: "JavaScript", logo: languageLogos.javascript, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
		{ name: "TypeScript", logo: languageLogos.typescript, url: "https://www.typescriptlang.org/" },
		{ name: "PHP", logo: languageLogos.php, url: "https://www.php.net/" },
		{ name: "HTML", logo: languageLogos.html, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
		{ name: "CSS", logo: languageLogos.css, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
		{ name: "XAML", logo: languageLogos.xaml, url: "https://learn.microsoft.com/en-us/dotnet/desktop/wpf/xaml/" },
		{ name: "SQL", logo: languageLogos.sql, url: "https://en.wikipedia.org/wiki/SQL" },
		{ name: "GraphQL", logo: languageLogos.graphql, url: "https://graphql.org/" },
		{ name: "Racket", logo: languageLogos.racket, url: "https://racket-lang.org/" },
	];

	const frameworks: Skill[] = [
		{ name: "Node.js", logo: frameworkLogos.nodeJS, url: "https://en.wikipedia.org/wiki/Node.js" },
		{ name: "Next.js", logo: frameworkLogos.nextJS, url: "https://nextjs.org/" },
		{ name: "Express.js", logo: frameworkLogos.expressJS, url: "https://expressjs.com/" },
		{ name: "Processing.js", logo: frameworkLogos.processingJS, url: "https://processing.org/" },
		{ name: "Tailwind CSS", logo: frameworkLogos.tailwindCSS, url: "https://tailwindcss.com/" },
		{ name: ".NET", logo: frameworkLogos.dotNet, url: "https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet" },
		{ name: "Xamarin", logo: frameworkLogos.xamarin, url: "https://dotnet.microsoft.com/apps/xamarin" },
		{ name: "xUnit", logo: frameworkLogos.xUnit, url: "https://xunit.net/" },
		{ name: "Jest", logo: frameworkLogos.jest, url: "https://jestjs.io/" },
	];

	const libraries: Skill[] = [
		{ name: "React", logo: libraryLogos.react, url: "https://react.dev/" },
		{ name: "Redux", logo: libraryLogos.redux, url: "https://redux.js.org/" },
		{ name: "TensorFlow", logo: libraryLogos.tensorflow, url: "https://www.tensorflow.org/" },
		{ name: "PyTorch", logo: libraryLogos.pytorch, url: "https://pytorch.org/" },
		{ name: "NumPy", logo: libraryLogos.numpy, url: "https://numpy.org/" },
		{ name: "Matplotlib", logo: libraryLogos.matplotlib, url: "https://matplotlib.org/" },
		{ name: "Animate On Scroll", logo: libraryLogos.aos, url: "https://michalsnik.github.io/aos/" },
		{ name: "OpenCV", logo: libraryLogos.openCV, url: "https://opencv.org/" },
		{ name: "Material UI", logo: libraryLogos.materialUI, url: "https://mui.com/material-ui/" },
	];

	const developerTools: Skill[] = [
		{ name: "Git", logo: developerToolLogos.git, url: "https://git-scm.com/" },
		{ name: "Docker", logo: developerToolLogos.docker, url: "https://en.wikipedia.org/wiki/Docker_(software)" },
		{ name: "Kubernetes", logo: developerToolLogos.kubernetes, url: "https://kubernetes.io/" },
		{ name: "Linux", logo: developerToolLogos.linux, url: "https://en.wikipedia.org/wiki/Linux" },
		{ name: "Bash", logo: developerToolLogos.bash, url: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)" },
		{ name: "Vim", logo: developerToolLogos.vim, url: "https://en.wikipedia.org/wiki/Vim_(text_editor)" },
		{ name: "MySQL", logo: developerToolLogos.mySQL, url: "https://en.wikipedia.org/wiki/MySQL" },
		{ name: "SQLite", logo: developerToolLogos.sqLite, url: "https://www.sqlite.org/" },
		{ name: "Postman", logo: developerToolLogos.postman, url: "https://www.postman.com/" },
		{ name: "Swagger", logo: developerToolLogos.swagger, url: "https://swagger.io/" },
		{ name: "Visual Studio", logo: developerToolLogos.visualStudio, url: "https://visualstudio.microsoft.com/" },
		{ name: "VS Code", logo: developerToolLogos.vsCode, url: "https://en.wikipedia.org/wiki/Visual_Studio_Code" },
		{ name: "xCode", logo: developerToolLogos.xCode, url: "https://developer.apple.com/xcode/" },
		{ name: "Terminal", logo: developerToolLogos.terminal, url: "https://learn.microsoft.com/en-us/windows/terminal/" },
		{ name: "Powershell", logo: developerToolLogos.powershell, url: "https://learn.microsoft.com/en-us/powershell/" },
		{ name: "Figma", logo: developerToolLogos.figma, url: "https://www.figma.com/" },
		{ name: "Storybook", logo: developerToolLogos.storybook, url: "https://storybook.js.org/" },
		{ name: "Unity", logo: developerToolLogos.unity, url: "https://unity.com/" },
		{ name: "cURL", logo: developerToolLogos.curl, url: "https://curl.se/" },
		{ name: "SSH", logo: developerToolLogos.ssh, url: "https://en.wikipedia.org/wiki/Secure_Shell" },
		{ name: "RDP", logo: developerToolLogos.rdp, url: "https://en.wikipedia.org/wiki/Remote_Desktop_Protocol" },
		{ name: "Copilot", logo: developerToolLogos.copilot, url: "https://copilot.microsoft.com/" },
		{ name: "OpenAI", logo: developerToolLogos.openAI, url: "https://openai.com/" },
		{ name: "GitHub Actions", logo: developerToolLogos.githubActions, url: "https://github.com/features/actions" },
		{ name: "Netlify", logo: developerToolLogos.netlify, url: "https://www.netlify.com/" },
		{ name: "Microsoft 365", logo: developerToolLogos.microsoft365, url: "https://www.microsoft.com/en-ca/microsoft-365" },
		{ name: "Microsoft Azure", logo: developerToolLogos.microsoftAzure, url: "https://azure.microsoft.com/en-ca" },
		{ name: "Azure DevOps", logo: developerToolLogos.azureDevOps, url: "https://azure.microsoft.com/en-us/products/devops" },
		{ name: "Jira", logo: developerToolLogos.jira, url: "https://www.atlassian.com/software/jira" },
	];

	return (
		<section id={"skills"}>
			<Grid container size={12} justifyContent={"center"} spacing={3} padding={3}>
				<Typography variant={"h4"} component={"h3"} color={"primary.main"}>
					Skills
				</Typography>
				<Grid container size={12} spacing={3} data-aos={"zoom-in"} data-aos-once={"true"}>
					<Typography variant={"h5"} component={"h4"}>
						Languages:
					</Typography>
					<SkillsInfoBlock skills={languages} />
				</Grid>
				<Grid container size={12} spacing={3} data-aos={"zoom-in"} data-aos-once={"true"}>
					<Typography variant={"h5"} component={"h4"}>
						Frameworks:
					</Typography>
					<SkillsInfoBlock skills={frameworks} />
				</Grid>
				<Grid container size={12} spacing={3} data-aos={"zoom-in"} data-aos-once={"true"}>
					<Typography variant={"h5"} component={"h4"}>
						Libraries:
					</Typography>
					<SkillsInfoBlock skills={libraries} />
				</Grid>
				<Grid container size={12} spacing={3} data-aos={"zoom-in"} data-aos-once={"true"}>
					<Typography variant={"h5"} component={"h4"}>
						Developer Tools:
					</Typography>
					<SkillsInfoBlock skills={developerTools} />
				</Grid>
			</Grid>
		</section>
	);
};

export default SkillsSection;
