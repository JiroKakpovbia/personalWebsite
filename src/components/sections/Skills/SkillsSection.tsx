import "./Skills.css";
import SkillsInfoBlock from "./components/SkillsInfoBlock.tsx";
import { Skill } from "../../../types";
import { Grid, Typography } from "@mui/material";

// Import Languages Logos
import cLogo from "../../../assets/skills/languages/c.svg";
import cPlusPlusLogo from "../../../assets/skills/languages/cplusplus.svg";
import cSharpLogo from "../../../assets/skills/languages/csharp.svg";
import pythonLogo from "../../../assets/skills/languages/python.svg";
import javaLogo from "../../../assets/skills/languages/java.svg";
import javascriptLogo from "../../../assets/skills/languages/javascript.svg";
import typescriptLogo from "../../../assets/skills/languages/typescript.svg";
import phpLogo from "../../../assets/skills/languages/php.svg";
import htmlLogo from "../../../assets/skills/languages/html5.svg";
import cssLogo from "../../../assets/skills/languages/css3.svg";
import xamlLogo from "../../../assets/skills/languages/xaml.webp";
import sqlLogo from "../../../assets/skills/languages/sql.svg";
import graphqlLogo from "../../../assets/skills/languages/graphql.svg";
import racketLogo from "../../../assets/skills/languages/racket.svg";

// Import Frameworks Logos
import nodeJSLogo from "../../../assets/skills/frameworks/nodejs.svg";
import nextJSLogo from "../../../assets/skills/frameworks/nextjs.svg";
import expressJSLogo from "../../../assets/skills/frameworks/expressjs.svg";
import processingJSLogo from "../../../assets/skills/frameworks/processing.svg";
import tailwindCSSLogo from "../../../assets/skills/frameworks/tailwindcss.svg";
import dotNetLogo from "../../../assets/skills/frameworks/dotnet.svg";
import xamarinLogo from "../../../assets/skills/frameworks/xamarin.svg";
import xUnitLogo from "../../../assets/skills/frameworks/xunit.svg";
import jestLogo from "../../../assets/skills/frameworks/jest.svg";

// Import Libraries Logos
import reactLogo from "../../../assets/skills/libraries/react.svg";
import reduxLogo from "../../../assets/skills/libraries/redux.svg";
import tensorflowLogo from "../../../assets/skills/libraries/tensorflow.svg";
import pytorchLogo from "../../../assets/skills/libraries/pytorch.svg";
import numpyLogo from "../../../assets/skills/libraries/numpy.svg";
import matplotlibLogo from "../../../assets/skills/libraries/matplotlib.svg";
import aosLogo from "../../../assets/skills/libraries/aos.svg";
import openCVLogo from "../../../assets/skills/libraries/opencv.svg";
import materialUILogo from "../../../assets/skills/libraries/materialui.svg";

// Import Developer Tools Logos
import gitLogo from "../../../assets/skills/developerTools/git.svg";
import dockerLogo from "../../../assets/skills/developerTools/docker.svg";
import kubernetesLogo from "../../../assets/skills/developerTools/kubernetes.svg";
import linuxLogo from "../../../assets/skills/developerTools/linux.svg";
import bashLogo from "../../../assets/skills/developerTools/bash.svg";
import vimLogo from "../../../assets/skills/developerTools/vim.webp";
import mySQLLogo from "../../../assets/skills/developerTools/mysql.svg";
import sqLiteLogo from "../../../assets/skills/developerTools/sqlite.svg";
import postmanLogo from "../../../assets/skills/developerTools/postman.webp";
import swaggerLogo from "../../../assets/skills/developerTools/swagger.svg";
import visualStudioLogo from "../../../assets/skills/developerTools/visualstudio.webp";
import vsCodeLogo from "../../../assets/skills/developerTools/vscode.webp";
import xCodeLogo from "../../../assets/skills/developerTools/xcode.webp";
import terminalLogo from "../../../assets/skills/developerTools/terminal.webp";
import powershellLogo from "../../../assets/skills/developerTools/powershell.webp";
import figmaLogo from "../../../assets/skills/developerTools/figma.svg";
import storybookLogo from "../../../assets/skills/developerTools/storybook.svg";
import unityLogo from "../../../assets/skills/developerTools/unity.svg";
import curlLogo from "../../../assets/skills/developerTools/curl.svg";
import sshLogo from "../../../assets/skills/developerTools/ssh.webp";
import rdpLogo from "../../../assets/skills/developerTools/rdp.svg";
import copilotLogo from "../../../assets/skills/developerTools/copilot.webp";
import openAILogo from "../../../assets/skills/developerTools/openai.webp";
import githubActionsLogo from "../../../assets/skills/developerTools/githubactions.svg";
import netlifyLogo from "../../../assets/skills/developerTools/netlify.webp";
import microsoft365Logo from "../../../assets/skills/developerTools/microsoft365.webp";
import microsoftAzureLogo from "../../../assets/skills/developerTools/azure.svg";
import azureDevOpsLogo from "../../../assets/skills/developerTools/azuredevops.webp";
import jiraLogo from "../../../assets/skills/developerTools/jira.svg";

const SkillsSection = () => {
	// Data arrays for each section
	const languages = [
		{ name: "C", logo: cLogo, url: "https://www.cprogramming.com" } as Skill,
		{ name: "C++", logo: cPlusPlusLogo, url: "https://en.wikipedia.org/wiki/C%2B%2B" } as Skill,
		{ name: "C#", logo: cSharpLogo, url: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" } as Skill,
		{ name: "Python", logo: pythonLogo, url: "https://www.python.org" } as Skill,
		{ name: "Java", logo: javaLogo, url: "https://en.wikipedia.org/wiki/Java_(programming_language)" } as Skill,
		{ name: "JavaScript", logo: javascriptLogo, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" } as Skill,
		{ name: "TypeScript", logo: typescriptLogo, url: "https://www.typescriptlang.org/" } as Skill,
		{ name: "PHP", logo: phpLogo, url: "https://www.php.net/" } as Skill,
		{ name: "HTML", logo: htmlLogo, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" } as Skill,
		{ name: "CSS", logo: cssLogo, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" } as Skill,
		{ name: "XAML", logo: xamlLogo, url: "https://learn.microsoft.com/en-us/dotnet/desktop/wpf/xaml/" } as Skill,
		{ name: "SQL", logo: sqlLogo, url: "https://en.wikipedia.org/wiki/SQL" } as Skill,
		{ name: "GraphQL", logo: graphqlLogo, url: "https://graphql.org/" } as Skill,
		{ name: "Racket", logo: racketLogo, url: "https://racket-lang.org/" } as Skill,
	];

	const frameworks = [
		{ name: "Node.js", logo: nodeJSLogo, url: "https://en.wikipedia.org/wiki/Node.js" } as Skill,
		{ name: "Next.js", logo: nextJSLogo, url: "https://nextjs.org/" } as Skill,
		{ name: "Express.js", logo: expressJSLogo, url: "https://expressjs.com/" } as Skill,
		{ name: "Processing.js", logo: processingJSLogo, url: "https://processing.org/" } as Skill,
		{ name: "Tailwind CSS", logo: tailwindCSSLogo, url: "https://tailwindcss.com/" } as Skill,
		{ name: ".NET", logo: dotNetLogo, url: "https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet" } as Skill,
		{ name: "Xamarin", logo: xamarinLogo, url: "https://dotnet.microsoft.com/apps/xamarin" } as Skill,
		{ name: "xUnit", logo: xUnitLogo, url: "https://xunit.net/" } as Skill,
		{ name: "Jest", logo: jestLogo, url: "https://jestjs.io/" } as Skill,
	];

	const libraries = [
		{ name: "React", logo: reactLogo, url: "https://react.dev/" } as Skill,
		{ name: "Redux", logo: reduxLogo, url: "https://redux.js.org/" } as Skill,
		{ name: "TensorFlow", logo: tensorflowLogo, url: "https://www.tensorflow.org/" } as Skill,
		{ name: "PyTorch", logo: pytorchLogo, url: "https://pytorch.org/" } as Skill,
		{ name: "NumPy", logo: numpyLogo, url: "https://numpy.org/" } as Skill,
		{ name: "Matplotlib", logo: matplotlibLogo, url: "https://matplotlib.org/" } as Skill,
		{ name: "Animate On Scroll", logo: aosLogo, url: "https://michalsnik.github.io/aos/" } as Skill,
		{ name: "OpenCV", logo: openCVLogo, url: "https://opencv.org/" } as Skill,
		{ name: "Material UI", logo: materialUILogo, url: "https://mui.com/material-ui/" } as Skill,
	];

	const developerTools = [
		{ name: "Git", logo: gitLogo, url: "https://git-scm.com/" } as Skill,
		{ name: "Docker", logo: dockerLogo, url: "https://en.wikipedia.org/wiki/Docker_(software)" } as Skill,
		{ name: "Kubernetes", logo: kubernetesLogo, url: "https://kubernetes.io/" } as Skill,
		{ name: "Linux", logo: linuxLogo, url: "https://en.wikipedia.org/wiki/Linux" } as Skill,
		{ name: "Bash", logo: bashLogo, url: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)" } as Skill,
		{ name: "Vim", logo: vimLogo, url: "https://en.wikipedia.org/wiki/Vim_(text_editor)" } as Skill,
		{ name: "MySQL", logo: mySQLLogo, url: "https://en.wikipedia.org/wiki/MySQL" } as Skill,
		{ name: "SQLite", logo: sqLiteLogo, url: "https://www.sqlite.org/" } as Skill,
		{ name: "Postman", logo: postmanLogo, url: "https://www.postman.com/" } as Skill,
		{ name: "Swagger", logo: swaggerLogo, url: "https://swagger.io/" } as Skill,
		{ name: "Visual Studio", logo: visualStudioLogo, url: "https://visualstudio.microsoft.com/" } as Skill,
		{ name: "VS Code", logo: vsCodeLogo, url: "https://en.wikipedia.org/wiki/Visual_Studio_Code" } as Skill,
		{ name: "xCode", logo: xCodeLogo, url: "https://developer.apple.com/xcode/" } as Skill,
		{ name: "Terminal", logo: terminalLogo, url: "https://learn.microsoft.com/en-us/windows/terminal/" } as Skill,
		{ name: "Powershell", logo: powershellLogo, url: "https://learn.microsoft.com/en-us/powershell/" } as Skill,
		{ name: "Figma", logo: figmaLogo, url: "https://www.figma.com/" } as Skill,
		{ name: "Storybook", logo: storybookLogo, url: "https://storybook.js.org/" } as Skill,
		{ name: "Unity", logo: unityLogo, url: "https://unity.com/" } as Skill,
		{ name: "cURL", logo: curlLogo, url: "https://curl.se/" } as Skill,
		{ name: "SSH", logo: sshLogo, url: "https://en.wikipedia.org/wiki/Secure_Shell" } as Skill,
		{ name: "RDP", logo: rdpLogo, url: "https://en.wikipedia.org/wiki/Remote_Desktop_Protocol" } as Skill,
		{ name: "Copilot", logo: copilotLogo, url: "https://copilot.microsoft.com/" } as Skill,
		{ name: "OpenAI", logo: openAILogo, url: "https://openai.com/" } as Skill,
		{ name: "GitHub Actions", logo: githubActionsLogo, url: "https://github.com/features/actions" } as Skill,
		{ name: "Netlify", logo: netlifyLogo, url: "https://www.netlify.com/" } as Skill,
		{ name: "Microsoft 365", logo: microsoft365Logo, url: "https://www.microsoft.com/en-ca/microsoft-365" } as Skill,
		{ name: "Microsoft Azure", logo: microsoftAzureLogo, url: "https://azure.microsoft.com/en-ca" } as Skill,
		{ name: "Azure DevOps", logo: azureDevOpsLogo, url: "https://azure.microsoft.com/en-us/products/devops" } as Skill,
		{ name: "Jira", logo: jiraLogo, url: "https://www.atlassian.com/software/jira" } as Skill,
	];
	return (
		<section id={"skills"}>
			<Grid container size={12} justifyContent={"center"} spacing={3} padding={3}>
				<Typography variant={"h4"}>Skills</Typography>
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
