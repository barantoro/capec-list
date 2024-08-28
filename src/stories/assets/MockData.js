export const MockData = [{
    "Description": "An adversary targets a specific user or group with a Phishing (CAPEC-98) attack tailored to a category of users in order to have maximum relevance and deceptive capability. Spear Phishing is an enhanced version of the Phishing attack targeted to a specific user or group. The quality of the targeted email is usually enhanced by appearing to come from a known or trusted entity. If the email account of some trusted entity has been compromised the message may be digitally signed. The message will contain information specific to the targeted users that will enhance the probability that they will follow the URL to the compromised site. For example, the message may indicate knowledge of the targets employment, residence, interests, or other information that suggests familiarity. As soon as the user follows the instructions in the message, the attack proceeds as a standard Phishing attack.",
    "Likelihood_Of_Attack": "Low",
    "Typical_Severity": "Low",
    "Execution_Flow": [
        {
            "Step": 1,
            "Phase": "Explore",
            "Description": "[Obtain useful contextual detailed information about the targeted user or organization] An adversary collects useful contextual detailed information about the targeted user or organization in order to craft a more deceptive and enticing message to lure the target into responding.",
            "Technique": [
                "Conduct web searching research of target. See also: CAPEC-118.",
                "Identify trusted associates, colleagues and friends of target. See also: CAPEC-118.",
                "Utilize social engineering attack patterns such as Pretexting. See also: CAPEC-407.",
                "Collect social information via dumpster diving. See also: CAPEC-406.",
                "Collect social information via traditional sources. See also: CAPEC-118.",
                "Collect social information via Non-traditional sources. See also: CAPEC-118."
            ]
        },
        {
            "Step": 2,
            "Phase": "Experiment",
            "Description": "[Optional: Obtain domain name and certificate to spoof legitimate site] This optional step can be used to help the adversary impersonate the legitimate site more convincingly. The adversary can use homograph attacks to convince users that they are using the legitimate website. Note that this step is not required for phishing attacks, and many phishing attacks simply supply URLs containing an IP address and no SSL certificate.",
            "Technique": [
                "Optionally obtain a domain name that visually looks similar to the legitimate site's domain name. An example is www.paypaI.com vs. www.paypal.com (the first one contains a capital i, instead of a lower case L).",
                "Optionally obtain a legitimate SSL certificate for the new domain name."
            ]
        },
        {
            "Step": 3,
            "Phase": "Experiment",
            "Description": "[Optional: Explore legitimate website and create duplicate] An adversary creates a website (optionally at a URL that looks similar to the original URL) that closely resembles the website that they are trying to impersonate. That website will typically have a login form for the victim to put in their authentication credentials. There can be different variations on a theme here.",
            "Technique": [
                "Use spidering software to get copy of web pages on legitimate site.",
                "Manually save copies of required web pages from legitimate site.",
                "Create new web pages that have the legitimate site's look at feel, but contain completely new content."
            ]
        },
        {
            "Step": 4,
            "Phase": "Experiment",
            "Description": "[Optional: Build variants of the website with very specific user information e.g., living area, etc.] Once the adversary has their website which duplicates a legitimate website, they need to build very custom user related information in it. For example, they could create multiple variants of the website which would target different living area users by providing information such as local news, local weather, etc. so that the user believes this is a new feature from the website.",
            "Technique": [
                "Integrate localized information in the web pages created to duplicate the original website. Those localized information could be dynamically generated based on unique key or IP address of the future victim."
            ]
        },
        {
            "Step": 5,
            "Phase": "Exploit",
            "Description": "[Convince user to enter sensitive information on adversary's site.] An adversary sends a message (typically an e-mail) to the victim that has some sort of a call to action to get the user to click on the link included in the e-mail (which takes the victim to adversary's website) and log in. The key is to get the victim to believe that the message is coming from a legitimate entity trusted by the victim or with which the victim or does business and that the website pointed to by the URL in the e-mail is the legitimate website. A call to action will usually need to sound legitimate and urgent enough to prompt action from the user.",
            "Technique": [
                "Send the user a message from a spoofed legitimate-looking e-mail address that asks the user to click on the included link.",
                "Place phishing link in post to online forum."
            ]
        },
        {
            "Step": 6,
            "Phase": "Exploit",
            "Description": "[Use stolen credentials to log into legitimate site] Once the adversary captures some sensitive information through phishing (login credentials, credit card information, etc.) the adversary can leverage this information. For instance, the adversary can use the victim's login credentials to log into their bank account and transfer money to an account of their choice.",
            "Technique": [
                "Log in to the legitimate site using another user's supplied credentials."
            ]
        }
    ],
    "Prerequisites": [
        "None. Any user can be targeted by a Spear Phishing attack."
    ],
    "Skills_Required": [
        "Spear phishing attacks require specific knowledge of the victims being targeted, such as which bank is being used by the victims, or websites they commonly log into (Google, Facebook, etc)."
    ],
    "Resources_Required": [
        "An adversay must have the ability communicate their phishing scheme to the victims (via email, instance message, etc.), as well as a website or other platform for victims to enter personal information into."
    ],
    "Consequences": [
        {
            "Scope": [
                "Confidentiality"
            ],
            "Impact": [
                "Read Data"
            ]
        },
        {
            "Scope": [
                "Accountability",
                "Authentication",
                "Authorization",
                "Non-Repudiation"
            ],
            "Impact": [
                "Gain Privileges"
            ]
        },
        {
            "Scope": [
                "Integrity"
            ],
            "Impact": [
                "Modify Data"
            ]
        }
    ],
    "Mitigations": [
        "Do not follow any links that you receive within your e-mails and certainly do not input any login credentials on the page that they take you too. Instead, call your Bank, PayPal, eBay, etc., and inquire about the problem. A safe practice would also be to type the URL of your bank in the browser directly and only then log in. Also, never reply to any e-mails that ask you to provide sensitive information of any kind."
    ]
},
{
    "Description": "An adversary tries known username/password combinations against different systems, applications, or services to gain additional authenticated access. Credential Stuffing attacks rely upon the fact that many users leverage the same username/password combination for multiple systems, applications, and services.",
    "Likelihood_Of_Attack": "Medium",
    "Typical_Severity": "Medium",
    "Execution_Flow": [
        {
            "Step": 1,
            "Phase": "Explore",
            "Description": "[Acquire known credentials] The adversary must obtain known credentials in order to access the target system, application, or service.",
            "Technique": [
                "An adversary purchases breached username/password combinations or leaked hashed passwords from the dark web.",
                "An adversary leverages a key logger or phishing attack to steal user credentials as they are provided.",
                "An adversary conducts a sniffing attack to steal credentials as they are transmitted.",
                "An adversary gains access to a database and exfiltrates password hashes.",
                "An adversary examines outward-facing configuration and properties files to discover hardcoded credentials."
            ]
        },
        {
            "Step": 2,
            "Phase": "Explore",
            "Description": "[Determine target's password policy] Determine the password policies of the target system/application to determine if the known credentials fit within the specified criteria.",
            "Technique": [
                "Determine minimum and maximum allowed password lengths.",
                "Determine format of allowed passwords (whether they are required or allowed to contain numbers, special characters, etc., or whether they are allowed to contain words from the dictionary).",
                "Determine account lockout policy (a strict account lockout policy will prevent brute force attacks if multiple passwords are known for a single user account)."
            ]
        },
        {
            "Step": 3,
            "Phase": "Experiment",
            "Description": "[Attempt authentication] Try each username/password combination until the target grants access.",
            "Technique": [
                "Manually or automatically enter each username/password combination through the target's interface."
            ]
        },
        {
            "Step": 3,
            "Phase": "Exploit",
            "Description": "[Impersonate] An adversary can use successful experiments or authentications to impersonate an authorized user or system or to laterally move within a system or application",
            "Technique": []
        },
        {
            "Step": 4,
            "Phase": "Exploit",
            "Description": "[Spoofing] Malicious data can be injected into the target system or into a victim user's system by an adversary. The adversary can also pose as a legitimate user to perform social engineering attacks.",
            "Technique": []
        },
        {
            "Step": 5,
            "Phase": "Exploit",
            "Description": "[Data Exfiltration] The adversary can obtain sensitive data contained within the system or application.",
            "Technique": []
        }
    ],
    "Prerequisites": [
        "The system/application uses one factor password based authentication, SSO, and/or cloud-based authentication.",
        "The system/application does not have a sound password policy that is being enforced.",
        "The system/application does not implement an effective password throttling mechanism.",
        "The adversary possesses a list of known user accounts and corresponding passwords that may exist on the target."
    ],
    "Skills_Required": [
        "A Credential Stuffing attack is very straightforward."
    ],
    "Resources_Required": [
        "A machine with sufficient resources for the job (e.g. CPU, RAM, HD).",
        "A known list of username/password combinations.",
        "A custom script that leverages the credential list to launch the attack."
    ],
    "Consequences": [
        {
            "Scope": [
                "Confidentiality",
                "Access Control",
                "Authentication"
            ],
            "Impact": [
                "Gain Privileges"
            ]
        },
        {
            "Scope": [
                "Confidentiality",
                "Authorization"
            ],
            "Impact": [
                "Read Data"
            ]
        },
        {
            "Scope": [
                "Integrity"
            ],
            "Impact": [
                "Modify Data"
            ]
        }
    ],
    "Mitigations": [
        "Leverage multi-factor authentication for all authentication services and prior to granting an entity access to the domain network.",
        "Create a strong password policy and ensure that your system enforces this policy.",
        "Ensure users are not reusing username/password combinations for multiple systems, applications, or services.",
        "Do not reuse local administrator account credentials across systems.",
        "Deny remote use of local admin credentials to log into domain systems.",
        "Do not allow accounts to be a local administrator on more than one system.",
        "Implement an intelligent password throttling mechanism. Care must be taken to assure that these mechanisms do not excessively enable account lockout attacks such as CAPEC-2.",
        "Monitor system and domain logs for abnormal credential access."
    ]
},
{
    "Description": "An adversary leverages the capability to execute their own script by embedding it within other scripts that the target software is likely to execute due to programs' vulnerabilities that are brought on by allowing remote hosts to execute scripts.",
    "Likelihood_Of_Attack": "High",
    "Typical_Severity": "High",
    "Execution_Flow": [
        {
            "Step": 1,
            "Phase": "Explore",
            "Description": "[Spider] Using a browser or an automated tool, an adversary records all entry points for inputs that happen to be reflected in a client-side script element. These script elements can be located in the HTML content (head, body, comments), in an HTML tag, XML, CSS, etc.",
            "Technique": [
                "Use a spidering tool to follow and record all non-static links that are likely to have input parameters (through forms, URL, fragments, etc.) actively used by the Web application.",
                "Use a proxy tool to record all links visited during a manual traversal of the web application.",
                "Use a browser to manually explore the website and analyze how it is constructed. Many browsers' plugins are available to facilitate the analysis or automate the discovery."
            ]
        },
        {
            "Step": 2,
            "Phase": "Experiment",
            "Description": "[Probe identified potential entry points for XSS vulnerability] The adversary uses the entry points gathered in the \"Explore\" phase as a target list and injects various common script payloads to determine if an entry point actually represents a vulnerability and to characterize the extent to which the vulnerability can be exploited.",
            "Technique": [
                "Manually inject various script payloads into each identified entry point using a list of common script injection probes that typically work in a client-side script elements context and observe system behavior to determine if script was executed.",
                "Manually inject various script payloads into each identified entry point using a list of common script injection probes that typically work in a server-side script elements context and observe system behavior to determine if script was executed.",
                "Use an automated injection attack tool to inject various script payloads into each identified entry point using a list of common script injection probes that typically work in a client-side script elements context and observe system behavior to determine if script was executed.",
                "Use an automated injection attack tool to inject various script payloads into each identified entry point using a list of common script injection probes that typically work in a server-side script elements context and observe system behavior to determine if script was executed.",
                "Use a proxy tool to record results of the created requests."
            ]
        },
        {
            "Step": 3,
            "Phase": "Exploit",
            "Description": "[Steal session IDs, credentials, page content, etc.] As the adversary succeeds in exploiting the vulnerability, they can choose to steal user's credentials in order to reuse or to analyze them later on.",
            "Technique": [
                "Develop malicious JavaScript that is injected through vectors identified during the Experiment Phase and loaded by the victim's browser and sends document information to the adversary.",
                "Develop malicious JavaScript that injected through vectors identified during the Experiment Phase and takes commands from an adversary's server and then causes the browser to execute appropriately."
            ]
        },
        {
            "Step": 4,
            "Phase": "Exploit",
            "Description": "[Forceful browsing] When the adversary targets the current application or another one (through CSRF vulnerabilities), the user will then be the one who perform the attacks without being aware of it. These attacks are mostly targeting application logic flaws, but it can also be used to create a widespread attack against a particular website on the user's current network (Internet or not).",
            "Technique": [
                "Develop malicious JavaScript that is injected through vectors identified during the Experiment Phase and loaded by the victim's browser and performs actions on the same web site",
                "Develop malicious JavaScript that injected through vectors identified during the Experiment Phase and takes commands from an adversary's server and then causes the browser to execute request to other web sites (especially the web applications that have CSRF vulnerabilities)."
            ]
        },
        {
            "Step": 5,
            "Phase": "Exploit",
            "Description": "[Content spoofing] By manipulating the content, the adversary targets the information that the user would like to get from the website.",
            "Technique": [
                "Develop malicious JavaScript that is injected through vectors identified during the Experiment Phase and loaded by the victim's browser and exposes adversary-modified invalid information to the user on the current web page."
            ]
        }
    ],
    "Prerequisites": [
        "Target software must be able to execute scripts, and also grant the adversary privilege to write/upload scripts."
    ],
    "Skills_Required": [
        "To load malicious script into open, e.g. world writable directory",
        "Executing remote scripts on host and collecting output"
    ],
    "Resources_Required": [],
    "Consequences": [
        {
            "Scope": [
                "Confidentiality",
                "Integrity",
                "Availability"
            ],
            "Impact": [
                "Execute Unauthorized Commands"
            ]
        },
        {
            "Scope": [
                "Confidentiality",
                "Access Control",
                "Authorization"
            ],
            "Impact": [
                "Gain Privileges"
            ]
        }
    ],
    "Mitigations": [
        "Use browser technologies that do not allow client side scripting.",
        "Utilize strict type, character, and encoding enforcement.",
        "Server side developers should not proxy content via XHR or other means. If a HTTP proxy for remote content is setup on the server side, the client's browser has no way of discerning where the data is originating from.",
        "Ensure all content that is delivered to client is sanitized against an acceptable content specification.",
        "Perform input validation for all remote content.",
        "Perform output validation for all remote content.",
        "Disable scripting languages such as JavaScript in browser",
        "Session tokens for specific host",
        "Patching software. There are many attack vectors for XSS on the client side and the server side. Many vulnerabilities are fixed in service packs for browser, web servers, and plug in technologies, staying current on patch release that deal with XSS countermeasures mitigates this.",
        "Privileges are constrained, if a script is loaded, ensure system runs in chroot jail or other limited authority mode"
    ]
},
{
    "Description": "An adversary exploits a hardware design flaw in a CPU implementation of transient instruction execution to expose sensitive data and bypass/subvert access control over restricted resources. Typically, the adversary conducts a covert channel attack to target non-discarded microarchitectural changes caused by transient executions such as speculative execution, branch prediction, instruction pipelining, and/or out-of-order execution. The transient execution results in a series of instructions (gadgets) which construct covert channel and access/transfer the secret data.",
    "Likelihood_Of_Attack": "Very High",
    "Typical_Severity": "Very High",
    "Execution_Flow": [
        {
            "Step": 1,
            "Phase": "Explore",
            "Description": "[Survey target application and relevant OS shared code libraries] Adversary identifies vulnerable transient instruction sets and the code/function calls to trigger them as well as instruction sets or code fragments (gadgets) to perform attack.",
            "Technique": [
                "Utilize Disassembler and Debugger tools to examine and trace instruction set execution of source code and shared code libraries on a system."
            ]
        },
        {
            "Step": 2,
            "Phase": "Explore",
            "Description": "[Explore cache and identify impacts] Utilize tools to understand the impact of transient instruction execution upon address spaces and CPU operations.",
            "Technique": [
                "Run OS or application specific tools that examine the contents of cache."
            ]
        },
        {
            "Step": 1,
            "Phase": "Experiment",
            "Description": "[Cause conditions for identified transient instruction set execution] Adversary ensures that specific code/instructions of the target process are executed by CPU, so desired transient instructions are executed.",
            "Technique": []
        },
        {
            "Step": 2,
            "Phase": "Experiment",
            "Description": "[Cause specific secret data to be cached from restricted address space] Executed instruction sets (gadgets) in target address space, initially executed via adversary-chosen transient instructions sets, establish covert channel and transfer secret data across this channel to cache.",
            "Technique": [
                "Prediction-based - adversary trains CPU to incorrectly predict/speculate conditions for instruction execution to be true, hence executing adversary-chosen transient instructions. These prediction-based methods include: Pattern History Table (PHT)/Input Validation Bypass, Branch Target Buffer (BTB)/Branch Target Injection, Return Stack Buffer (RSB)/Return Address Injection, and Store To Load (STL)/Speculative Store Bypass.",
                "Exception/Fault-based - adversary has CPU execute transient instructions that raise an exception allowing inaccessible memory space to be accessed via out-of-order execution. These exception/fault-based methods include: Supervisor-only Bypass, Virtual Translation Bypass, System Register Bypass, FPU Register Bypass, Read-only Bypass, Protection Key Bypass, and Bounds Check Bypass."
            ]
        },
        {
            "Step": 1,
            "Phase": "Exploit",
            "Description": "[Perform covert channel attack to obtain/access secret data] Adversary process code removes instructions/data from shared cache set, waits for target process to reinsert them back into cache, to identify location of secret data via a timing method. Adversary continuously repeat this process to identify and access entirety of targeted secret data.",
            "Technique": [
                "Flush+Reload - adversary frequently flushes targeted memory cache line using a dedicated machine flush instruction, and uses another process to measure time taken for CPU to load victim secret data.",
                "Evict+Time - adversary causes victim to load target set into cache and measures time for victim process to load this data, setting a baseline. Adversary evicts a specified cache line and causes victim process to execute again, and measures any change in execution time, to determine if cache line was accessed.",
                "Prime+Probe - adversary primes cache by filling cache line(s) or set(s) with data, after some time victim process evicts this adversary data to replace it with secret data. The adversary then probes/accesses all the previously accessed cache lines detecting cache misses, which determine that their attacker data has been evicted and replaced with secret data from victim process."
            ]
        }
    ],
    "Prerequisites": [
        "The adversary needs at least user execution access to a system and a maliciously crafted program/application/process with unprivileged code to misuse transient instruction set execution of the CPU."
    ],
    "Skills_Required": [
        "Detailed knowledge on how various CPU architectures and microcode perform transient execution for various low-level assembly language code instructions/operations.",
        "Detailed knowledge on compiled binaries and operating system shared libraries of instruction sequences, and layout of application and OS/Kernel address spaces for data leakage."
    ],
    "Resources_Required": [
        "C2C mechanism or direct access to victim system, capable of dropping malicious program and collecting covert channel attack data.",
        "Malicious program capable of triggering execution of transient instructions or vulnerable instruction sequences of victim program and performing a covert channel attack to gather data from victim process memory space. Ultimately, the speed with which an attacker discovers a secret is directly proportional to the computational resources of the victim machine."
    ],
    "Consequences": [
        {
            "Scope": [
                "Confidentiality"
            ],
            "Impact": [
                "Read Data"
            ]
        },
        {
            "Scope": [
                "Access Control"
            ],
            "Impact": [
                "Bypass Protection Mechanism"
            ]
        },
        {
            "Scope": [
                "Authorization"
            ],
            "Impact": [
                "Execute Unauthorized Commands"
            ]
        }
    ],
    "Mitigations": [
        "Implementation: DAWG (Dynamically Allocated Way Guard) - processor cache properly divided between different programs/processes that don't share resources",
        "Implementation: KPTI (Kernel Page-Table Isolation) to completely separate user-space and kernel space page tables",
        "Configuration: Architectural Design of Microcode to limit abuse of speculative execution and out-of-order execution",
        "Configuration: Disable SharedArrayBuffer for Web Browsers",
        "Configuration: Disable Copy-on-Write between Cloud VMs",
        "Configuration: Privilege Checks on Cache Flush Instructions",
        "Implementation: Non-inclusive Cache Memories to prevent Flush+Reload Attacks"
    ]
}
]