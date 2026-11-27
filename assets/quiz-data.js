/* Self-check questions for every lesson.
   Format per lesson: [question, [choices], index of the right choice, why]. */
window.QUIZ = {
"extra/ai-technical.html": [
 ["What does fine-tuning change?", ["The context window", "The model's weights", "The system prompt", "The token price"], 1, "Fine-tuning sends the expert back to school: it changes the weights. Slow and costly, rarely the first fix."],
 ["Why does a chat seem to remember earlier messages?", ["The model learns during the chat", "The harness resends the whole transcript every turn", "The model saves notes inside its weights", "It doesn't; it guesses"], 1, "The model is stateless. The harness sends the full conversation again on every turn."],
 ["Retrieval returns a near-match from another project and the AI answers fluently from it. Which failure is that?", ["The whole cabinet", "The wrong file", "Nondeterminism", "Fine-tuning"], 1, "The model did its job; the retrieval handed it the wrong file. Fix keys, filters and scoping."],
 ["Which of these does NOT lower the token bill?", ["Prompt caching", "Starting a fresh session when the task changes", "Attaching every document 'just in case'", "Summarizing old turns"], 2, "Stuffing the window costs more and adds noise: that's the whole cabinet."],
 ["An AI controls a motor. Where must the speed limit live?", ["In the prompt", "In firmware or a controller the model can't talk past", "In the model's memory", "In a polite request"], 1, "The model proposes; something deterministic disposes. Limits live outside the model, and interlocks stay hardware."]
],
"physical-ai/lesson-8.html": [
 ["At DiGiKits, who makes the final decision on safety, money and customer promises?", ["Claude", "A person", "Whoever is fastest", "The automatic tests"], 1, "Claude drafts and helps; people decide; tests and hardware have the final word on whether it works."],
 ["What is a level 3 use of AI?", ["Asking one question", "Capturing a method so Claude does a job the same way every time", "Turning the computer off", "Buying a new laptop"], 1, "Writing the method down (for example as a skill) makes good work repeatable for the whole team."],
 ["Why do tools that make tools matter for a small company?", ["They look nice", "One hour of work keeps paying back, so a small team can work like a big one", "They replace all people", "They remove the need for testing"], 1, "Each level hides the work below it, like the layers in Lesson 0."],
 ["Claude suggests a command to fix a customer's Pi. What should you do?", ["Send it straight to the customer", "Check it makes sense and is safe, then decide", "Ignore all AI suggestions", "Ask the customer to guess"], 1, "You own the answer. Claude can be wrong, sometimes confidently."],
 ["Which request will usually get the best help?", ["“Help.”", "“Fix it.”", "One with context, a clear goal and the format you want", "One in capital letters"], 2, "Give Claude what a new colleague would need: context, goal, format."]
],
"physical-ai/lesson-0.html": [
 ["Which order did computer switches come in?", ["Tubes, relays, chips, transistors", "Relays, vacuum tubes, transistors, integrated circuits", "Transistors, relays, tubes, chips", "Chips, tubes, relays, transistors"], 1, "Relays (Z3, 1941) came first, then tubes (Colossus, ENIAC), then transistors (1947), then chips (1958–59)."],
 ["How did punched cards store a program?", ["With magnets", "A hole or no hole meant 1 or 0", "With colours", "By weight"], 1, "The same idea as binary: two states, hole or no hole."],
 ["What was the Intel 4004 (1971)?", ["The first microcontroller", "The first commercial microprocessor: a CPU on one chip", "The first transistor", "The first smartphone"], 1, "A microcontroller also puts memory and I/O on the chip; early ones were the TI TMS1000 and Intel 8048."],
 ["Which was the first widely used high-level programming language?", ["Python", "C", "FORTRAN", "HTML"], 2, "IBM's FORTRAN (1957); COBOL followed in 1959, C in 1972, Python in 1991."],
 ["What idea from 2017 do most AI models like Claude build on?", ["The vacuum tube", "The transformer", "The punched card", "The relay"], 1, "“Attention Is All You Need” described the transformer."]
],
"physical-ai/lesson-6.html": [
 ["What is PWM?", ["A kind of battery", "Switching a pin on and off very fast so the average power sets brightness or speed", "A Wi-Fi protocol", "A type of sensor"], 1, "The share of time it's on (the duty cycle) sets the average."],
 ["At 3.3 V and 50% duty cycle, what's the average voltage?", ["3.3 V", "1.65 V", "0.5 V", "5 V"], 1, "Half the time on gives half the voltage on average."],
 ["What tells a hobby servo which angle to hold?", ["The colour of the wire", "The length of each pulse, about 1 to 2 ms", "The supply voltage", "How loud it is"], 1, "Pulse width means angle; check the servo's datasheet for its exact range."],
 ["Why shouldn't a motor be wired straight to a GPIO pin?", ["Motors are too quiet", "A pin supplies only a tiny current; the motor needs a driver and its own supply", "GPIO pins are only for LEDs at night", "It's fine, nothing happens"], 1, "Use a driver, a separate supply, a common ground and a flyback diode."],
 ["The Pi reboots every time the motor starts. First check?", ["Reinstall Linux", "Whether the motor is powered from the Pi instead of its own supply", "Change the Wi-Fi password", "Buy a faster SD card"], 1, "A motor's start-up current can drag the Pi's supply down; give it its own."]
],
"physical-ai/lesson-7.html": [
 ["What is a protocol?", ["A brand of cable", "An agreed set of rules for how devices exchange bytes", "A type of motor", "A power supply"], 1, "Both sides must follow the same rules, like speaking the same language."],
 ["In UART, what does the line do when nothing is being sent?", ["Rests low", "Rests high, then a low start bit begins each byte", "Flashes", "Turns off the Pi"], 1, "Idle high; start bit low; 8 data bits; stop bit high."],
 ["A serial console shows garbage characters. Most likely cause?", ["The cable is too short", "The two sides use different baud rates", "The Pi has no RAM", "The LED strip is off"], 1, "Wrong speed means the receiver reads bits at the wrong moments."],
 ["How does I²C know which device the Pi is talking to?", ["Each device has its own address, like 0x48", "Each device has its own Wi-Fi", "It talks to all of them and hopes", "By colour"], 0, "Only the device whose address is called answers."],
 ["In MQTT, what does the broker do?", ["Repairs broken wires", "Passes published messages to everyone subscribed to that topic", "Stores the operating system", "Measures temperature"], 1, "It's the noticeboard between publishers and subscribers."]
],
"physical-ai/lesson-4.html": [
 ["How does the start/stop circuit keep the motor running after Start springs back?", ["The button is glued down", "The motor's output feeds back into the OR gate and holds itself on", "The CPU presses it again", "It doesn't; the motor stops"], 1, "Feedback is memory: the output keeps the input on until Stop breaks the loop."],
 ["What is a memory address?", ["The house where the computer lives", "The number of a memory box, usually written in hex", "The Wi-Fi password", "The size of the SD card"], 1, "Each byte of memory sits at a numbered address."],
 ["The power goes off. What happens to RAM and to the SD card?", ["Both keep everything", "RAM forgets; the SD card keeps its files", "RAM keeps; the SD card forgets", "Both forget"], 1, "RAM is fast working memory that needs power; storage keeps data without power."],
 ["What three steps does a CPU repeat?", ["Plan, build, ship", "Fetch, decode, execute", "Read, write, delete", "Sense, act, sleep"], 1, "Fetch the instruction, work out what it means, do it, then move on."],
 ["What does the program counter hold?", ["How many programs are installed", "The address of the next instruction", "The CPU temperature", "The count of LED blinks"], 1, "It remembers where the CPU is in the program."]
],
"physical-ai/lesson-5.html": [
 ["What does an ADC do?", ["Turns a smooth voltage into a number", "Turns numbers into sound", "Stores files", "Connects to Wi-Fi"], 0, "Analog in, digital number out."],
 ["A 12-bit ADC with a 3.3 V range reads 1.65 V. About what number does it give?", ["165", "1024", "2048", "4095"], 2, "Half of 3.3 V is half of 4095, about 2048."],
 ["You lower the resolution from 12 bits to 3 bits. What happens?", ["It can tell only 8 steps apart, so detail is lost", "It samples faster", "Nothing changes", "The voltage goes up"], 0, "3 bits give 2³ = 8 levels instead of 4096."],
 ["A customer wired an analog light sensor straight to a Pi GPIO pin. Why won't it give a reading?", ["The Pi's GPIO pins are digital only; it has no ADC", "The sensor needs Wi-Fi", "GPIO pins only work at night", "The Pi needs more RAM"], 0, "Use an ADC chip, a microcontroller, or a digital sensor."],
 ["What's the highest voltage you may connect to an ADC or GPIO pin on a Pi or Pico?", ["12 V", "5 V", "3.3 V", "Any voltage"], 2, "Above 3.3 V can damage the pin or the chip; use a divider or level shifter."]
],
"physical-ai/lesson-3.html": [
 ["Two switches wired in series behave like which gate?", ["OR", "AND", "NOT", "None"], 1, "Current must pass through both, so both must be closed: AND."],
 ["An OR gate has A = 0 and B = 1. What is the output?", ["0", "1", "It depends on the clock", "Both"], 1, "OR needs only one input on."],
 ["What does a NOT gate do?", ["Adds two bits", "Flips its input: 1 becomes 0 and 0 becomes 1", "Stores a bit", "Turns the computer off"], 1, "NOT is the opposite; the small circle on the symbol means flip."],
 ["Motor rule: Start AND Guard closed AND NOT E-stop. Which single input always stops the motor when it's on?", ["Start", "Guard closed", "E-stop", "None of them"], 2, "With NOT in front, E-stop on makes that input 0, and AND then outputs 0 no matter what."],
 ["What is a truth table?", ["A list of every possible input with the output you get", "A table of true facts about computers", "A spreadsheet of prices", "The CPU's memory"], 0, "Truth tables describe what a circuit must do for every input."]
],
"physical-ai/lesson-2.html": [
 ["Who are programming languages really made for?", ["The CPU", "People, so they can tell the computer what to do more easily", "The power supply", "Only AI"], 1, "The chip only sees voltages; every language is a translation layer invented for humans."],
 ["What is 00101101 in decimal?", ["45", "101", "2D", "13"], 0, "32 + 8 + 4 + 1 = 45."],
 ["How many bits does one hex digit stand for?", ["2", "4", "8", "16"], 1, "One hex digit = 4 bits, so one byte = exactly two hex digits."],
 ["An LED colour is #FF0000. What is it?", ["Blue", "Green", "Red at full brightness", "Off"], 2, "Red FF (255), green 00, blue 00: full red. Check the strip's colour order if it shows green."],
 ["What does a compiler do?", ["Runs Python line by line", "Translates a whole program into machine code before it runs", "Draws the circuit", "Checks spelling"], 1, "Compilers (C, C++) translate ahead of time; interpreters (Python) translate while running."]
],
"physical-ai/lesson-1.html": [
 ["Inside a chip, what physically carries a 0 or a 1?", ["A tiny printed number", "A low or high voltage on a wire", "A sound", "A colour"], 1, "The medium is voltage; binary is the code we agree it stands for."],
 ["Why do computers use two states instead of ten?", ["Ten would be too expensive to print", "Two states tolerate noise and make simple, reliable switches", "Engineers only know two numbers", "Binary is faster to type"], 1, "A slightly wobbly signal still clearly reads as high or low."],
 ["The letter A is code number 65. Which byte is it?", ["01000001", "00000065", "10000010", "11111111"], 0, "64 + 1 = 65, so the 64 bit and the 1 bit are on: 01000001."],
 ["Which part turns a sensor's analog voltage into binary numbers?", ["The DAC", "The ADC (analog-to-digital converter)", "The power supply", "The Wi-Fi chip"], 1, "ADC brings the world in; DAC or PWM sends it back out."],
 ["What is the real 'language' a processor runs?", ["English", "Python", "Its machine code: instructions written as bit patterns", "Morse code"], 2, "Binary is the alphabet; machine code is the language, and it differs between ARM and Intel chips."]
],
"extra/pipeline.html": [
 ["What does CI (continuous integration) do?", ["Deploys to the server", "Tests every change automatically before it can join main", "Writes the code", "Backs up the database"], 1, "CI runs the checks on every pull request so broken code can't slip into main."],
 ["When does the deploy job run in the example workflow?", ["On every pull request", "Only after the test job passes on a push to main", "Every night", "Whenever someone opens an issue"], 1, "needs: test plus the main-only condition means it deploys only merged, tested code."],
 ["Where does the server's SSH key go?", ["In ci.yml", "In the README", "In the repo's Actions secrets", "In a comment on the pull request"], 2, "Secrets live in Settings → Secrets and variables → Actions, never in the file."],
 ["In the DiGiKits pipeline, who decides whether a change merges?", ["The AI", "CI decides alone", "A person reviewing the pull request", "Nobody, it merges by itself"], 2, "The AI drafts and CI checks, but a person reviews and decides."],
 ["A merged change broke the live site. What's the calm fix?", ["SSH in and edit files on the server", "Revert the pull request so the pipeline deploys the previous version", "Turn off CI", "Delete the repo"], 1, "Revert through the pipeline, then add a test that would have caught the bug."]
],
"extra/deploy.html": [
 ["What does deploying an app mean?", ["Writing the code", "Copying it to an always-on computer, starting it, and making it reachable", "Deleting old versions", "Printing the README"], 1, "Deploying puts the code on a server, runs it, and gives people a way to reach it."],
 ["What does the DNS A record do?", ["Encrypts the website", "Turns a name like app.example.com into the server's IP address", "Starts Docker", "Blocks hackers"], 1, "DNS is the phone book: the A record points the name at the server's IP."],
 ["Where do the app's passwords and keys go?", ["In the GitHub repo so the team can see them", "In the .env file on the server only", "On the message board", "In the README"], 1, "Secrets live in .env on the server. Git only holds .env.example with empty values."],
 ["Caddy can't get an HTTPS certificate. What do you check first?", ["Reinstall Ubuntu", "That DNS points at this server and ports 80 and 443 are open", "Buy a bigger Droplet", "Change the app's colours"], 1, "Caddy needs the name to reach this server on ports 80/443 before it can get a certificate."],
 ["An update broke the site. What's the calm fix?", ["Destroy the Droplet", "Check out the last good commit and run docker compose up -d --build", "Wait and hope", "Delete the data folder"], 1, "Roll back to the last good commit first, then fix the code without pressure."]
],
"phase-1/day-1.html": [
 ["What is the DiGiKits motto?", ["Build fast, break things", "From thoughts to things", "Hardware is hard", "AI for everyone"], 1, "From thoughts to things: an idea becomes a real, working product."],
 ["In Thought → Design → Test → Build, where does most support work live?", ["Thought", "Design", "Test", "Build"], 2, "Test is where real machines must keep running, so that's where support lives."],
 ["What's the difference between Git and GitHub?", ["They are the same thing", "Git saves versions on your computer; GitHub shares them online", "GitHub is only for photos", "Git is a website, GitHub is a program"], 1, "Git is the program that keeps versions; GitHub is the website where the team shares them."],
 ["What do you send your coach after signing up?", ["Your password", "Your 2FA recovery codes", "Your username only", "A screenshot of your settings"], 2, "Only the username. Passwords and codes are never shared with anyone."],
 ["Which AI does DiGiKits work with every day?", ["Claude, made by Anthropic", "No AI at all", "Only a calculator", "A robot dog"], 0, "DiGiKits works with Claude, an AI made by Anthropic. You meet it properly on Day 2."],
 ["What is a commit?", ["A GitHub password", "One saved change with a note", "A type of Pi", "A chat message"], 1, "Each commit is a saved step in the history."],
 ["What do you send your coach to get access to projects?", ["Your password", "Your recovery codes", "Your GitHub username", "Nothing"], 2, "Only the username. Access is given by invitation."],
 ["An email asks you to verify your GitHub password via a link. What do you do?", ["Click quickly", "Reply with the password", "Check the link, open github.com yourself, tell your coach", "Forward it to friends"], 2, "GitHub never asks for your password by email."],
 ["Why do notes at the end of the day matter?", ["They don't", "They feed the knowledge base, so the next fix is faster", "For pay", "GitHub requires them"], 1, "Notes become answers for people and the AI helpers."]
],
"phase-1/day-2.html": [
 ["In the firm picture, what is the client file on the desk?", ["The AI model", "The context: everything the AI knows right now", "The software around the AI", "Your password"], 1, "The client file is the context: what the AI reads for this conversation."],
 ["Why can a big question with the whole filing cabinet be a bad idea?", ["The AI gets bored", "You pay for what the AI reads, and it can miss the point", "It's against the law", "It's always faster"], 1, "Small job, small file: more reading costs more and can blur the answer."],
 ["Who makes Claude?", ["DiGiKits", "Anthropic", "Raspberry Pi", "GitHub"], 1, "Claude is an AI model made by Anthropic."],
 ["Claude drafts a script for a customer's screen. What happens next?", ["Send it straight to the customer", "A person checks it and tests it on real hardware first", "Delete it", "Ask a second AI and trust whichever is longer"], 1, "Claude drafts; people decide and check; the hardware has the final word."],
 ["When connecting a new Pi, what do you plug in last?", ["SD card", "Monitor", "Keyboard", "Power"], 3, "The Pi starts the moment it has power, so everything else goes in first."],
 ["Which part of the card holds the start-up files?", ["rootfs", "bootfs", "/home", "The cloud"], 1, "bootfs is the small start-up part; rootfs holds the system."],
 ["What does throttled=0x0 mean?", ["The Pi is broken", "No power or heat problems", "Wi-Fi is off", "The card is full"], 1, "Any other value points to power or cooling."],
 ["Why do many DiGiKits devices run Raspberry Pi OS Lite?", ["It's newer", "No desktop: less to go wrong, run over SSH", "It's paid", "It has games"], 1, "Devices without a screen don't need a desktop."],
 ["How should you switch a Pi off?", ["Pull the plug", "sudo poweroff, then wait for the light to stop", "Hold the card", "Unplug the monitor"], 1, "Pulling power while it writes can damage the card."]
],
"phase-1/day-3.html": [
 ["What does pwd tell you?", ["Your password", "Which folder you are in", "Who is logged in", "The Pi's temperature"], 1, "pwd = print working directory: where you are right now."],
 ["What does ~ mean in a path?", ["The root folder", "Your home folder, /home/yourname", "The trash", "Any folder"], 1, "~ is a shortcut for your home folder."],
 ["Which command can't be undone?", ["cp", "mv", "rm", "ls"], 2, "rm deletes for good. There is no recycle bin."],
 ["What does the Tab key do in the terminal?", ["Deletes a line", "Finishes names for you", "Opens a new window", "Shows the manual"], 1, "Tab completes file and folder names, which also stops typos."],
 ["In ls -la /var/log, what is -la?", ["The command", "Options", "The argument", "A file"], 1, "Options change how the command runs."],
 ["What does cd .. do?", ["Goes to your home folder", "Goes up one folder", "Deletes a folder", "Nothing"], 1, ".. means the folder above."],
 ["What does > do in ls > list.txt?", ["Adds to the end of list.txt", "Saves the output to list.txt, replacing it", "Deletes list.txt", "Compares files"], 1, ">> adds; > replaces. Careful."],
 ["Which key stops a running command?", ["Ctrl+Z", "Ctrl+C", "Esc", "q"], 1, "Ctrl+C stops it."],
 ["How do you watch new lines arrive in a log?", ["cat log", "tail -f log", "head log", "rm log"], 1, "tail -f follows the file live."]
],
"phase-1/day-4.html": [
 ["What is SSH?", ["A web browser", "A secure terminal on another computer", "A type of SD card", "A Wi-Fi password"], 1, "SSH is a Secure SHell: a protected terminal on a remote machine."],
 ["Which half of an SSH key pair may you copy to the Pi?", ["The private key", "The public key", "Both", "Neither"], 1, "The public key is the lock you can give away. The private key never leaves your laptop."],
 ["Why use Tailscale?", ["To make Wi-Fi faster", "To reach the Pi by name from anywhere without opening your router", "To cool the Pi", "To back up the SD card"], 1, "Tailscale makes a private network of your own devices, wherever they are."],
 ["SSH refuses to connect. What do you check first?", ["Reinstall Linux", "Is the Pi on and reachable (ping)?", "Buy a new key", "Change the username"], 1, "Cheapest checks first: is it on and reachable?"],
 ["After re-flashing a Pi, SSH warns the host identification changed. What do you do?", ["Panic", "ssh-keygen -R trainpi.local, then connect again", "Re-flash again", "Turn off SSH"], 1, "Expected after a re-flash. If nobody re-flashed it, tell your coach."],
 ["“Connection refused” means…", ["Nothing answered", "The Pi answered but SSH isn't running", "Wrong password", "Internet down"], 1, "Refused = reached the machine, no SSH service."],
 ["What does tmux give you?", ["Faster Wi-Fi", "Sessions that keep running after you disconnect", "A new password", "File copying"], 1, "Detach, come back later."],
 ["How do you copy app.log from pi-a to the folder you're in?", ["scp app.log pi-a", "scp pi-a:~/app.log .", "cp pi-a app.log", "ssh app.log"], 1, "scp source destination; the dot means here."],
 ["Before switching off password login, you should…", ["Reboot", "Check your key works, and test in a second window", "Delete your key", "Turn off Tailscale"], 1, "Otherwise you can lock yourself out."]
],
"phase-1/day-5.html": [
 ["In -rwxr-xr--, what can 'everyone else' do?", ["Read, write and run", "Read and run", "Read only", "Nothing"], 2, "The last three letters, r--, belong to everyone else: read only."],
 ["What number does rwx add up to?", ["4", "5", "6", "7"], 3, "r = 4, w = 2, x = 1, so rwx = 7."],
 ["A program can't write its log file. What is the right fix?", ["chmod 777 on the file", "Give the program's user ownership, or add it to the file's group", "Delete the log", "Run everything with sudo"], 1, "Fix the owner or group, not the whole world's rights."],
 ["Why is software from apt considered safe?", ["It's free", "It comes from the Raspberry Pi OS package servers, already checked", "It's small", "It never needs updates"], 1, "apt installs from trusted, checked package servers."],
 ["What is 644 in letters?", ["rwxr-xr-x", "rw-r--r--", "rw-------", "rwxrwxrwx"], 1, "6 = rw, 4 = r, 4 = r."],
 ["Which number for a private key file?", ["777", "755", "600", "644"], 2, "Only the owner can read or write it."],
 ["Why always use -aG with usermod?", ["It's faster", "Without -a, the user loses all other groups", "It makes a new user", "It deletes the user"], 1, "-a adds; -G alone replaces."],
 ["A user was just added to gpio but still gets permission denied. Why?", ["The Pi is broken", "Groups change only after logging in again", "GPIO needs 777", "Wrong Wi-Fi"], 1, "Log out and in, or reboot."],
 ["Where are system settings usually kept?", ["/home", "/etc", "/tmp", "/var/log"], 1, "/etc holds configuration files."]
],
"phase-1/day-6.html": [
 ["What does DHCP do?", ["Turns names into numbers", "Hands out IP addresses to devices", "Encrypts Wi-Fi", "Measures speed"], 1, "DHCP is how the router gives each device its IP address."],
 ["What does DNS do?", ["Turns a name like google.com into a number", "Charges the Pi", "Blocks ports", "Saves files"], 0, "DNS is the internet's phone book."],
 ["ping 8.8.8.8 works but ping google.com fails. What is broken?", ["The Wi-Fi password", "The power supply", "DNS", "The SD card"], 2, "The internet is reachable by number, so only the name lookup (DNS) is failing."],
 ["How do you make the Pi always get the same IP address?", ["Reboot it often", "A DHCP reservation in the router", "Change its hostname", "Unplug the router"], 1, "A reservation ties the Pi's MAC address to one IP address."],
 ["Which address is set at the factory and never changes?", ["The IP address", "The MAC address", "The hostname", "The gateway"], 1, "The MAC belongs to the network chip. The IP is lent by the router."],
 ["What does the first half of a MAC address tell you?", ["The device's IP", "Who made the network chip", "The Wi-Fi password", "How old the device is"], 1, "The first three bytes are the maker code (OUI), e.g. dc:a6:32 for Raspberry Pi."],
 ["The Pi has a reservation, but today it got a different IP. Most likely?", ["The router is broken", "It's on Wi-Fi, and the reservation is for the Ethernet MAC", "DNS failed", "The SD card is full"], 1, "Ethernet and Wi-Fi each have their own MAC; a reservation covers only one."],
 ["A device shows 169.254.8.12. What happened?", ["It's working fine", "No router answered its request for an address", "It's on the internet directly", "It's using IPv6"], 1, "169.254.x.x is a self-made address when DHCP gets no answer."],
 ["Can 192.168.0.50 talk directly to 192.168.1.40 (both /24)?", ["Yes, always", "No, they are on different subnets", "Only on Wi-Fi", "Only if both are Pis"], 1, "With /24 the first three numbers must match to talk directly."],
 ["Why can't a client's iPad on guest Wi-Fi find the LED controller?", ["iPads can't use Wi-Fi", "Guest Wi-Fi isolates devices and is often a different subnet", "The controller is too far", "DNS is broken"], 1, "Put the iPad on the same network as the controller."],
 ["Is blocking unknown MAC addresses good security?", ["Yes, MACs can't be faked", "No, a MAC can be copied easily", "Only on 5 GHz", "Only for Pis"], 1, "Real security is a strong password, updates and closed ports."],
 ["Where do you look up which IP and MAC each device has?", ["The router's Devices (client list) page", "The Wi-Fi password page", "The firmware page", "The Pi's SD card"], 0, "The router keeps a list of every device it gave an address to."],
 ["Your lab router's WAN got 192.168.1.73. What should its LAN be?", ["192.168.1.1", "A different street, like 192.168.50.1", "8.8.8.8", "Nothing"], 1, "WAN and LAN must be on different subnets or the router can't route between them."],
 ["A Wi-Fi device shows signal −82 dBm. What do you expect?", ["Perfect connection", "Dropouts: it's weak", "Faster speed", "Nothing, dBm is the battery"], 1, "Closer to 0 is stronger. Below about −75 expect trouble."],
 ["Which router feature should be off on a DiGiKits-managed network?", ["DHCP", "WPS and remote management", "Wi-Fi", "The firewall"], 1, "They make attacks easier. We use Tailscale for remote access."]
],
"phase-1/day-7.html": [
 ["GPIO17 is on which physical pin?", ["Pin 17", "Pin 11", "Pin 1", "Pin 40"], 1, "Code uses GPIO numbers; GPIO17 sits at physical pin 11."],
 ["Which LED leg goes towards GPIO17 through the resistor?", ["The short leg", "The long leg", "Either", "Neither: it goes to 5V"], 1, "The long leg (+) goes towards the GPIO side; the short leg goes to ground."],
 ["Why is the 330 Ω resistor there?", ["To make the LED brighter", "To limit the current so the LED and pin aren't damaged", "To store power", "Decoration"], 1, "Without it, too much current flows through the LED and the pin."],
 ["The LED won't light. What is a good first step?", ["Buy a new Pi", "Check whether it's code or wiring, e.g. test the code another way", "Rewrite everything", "Use a bigger resistor"], 1, "Split the problem: software or wiring?"],
 ["Where do you look first in a Python traceback?", ["The first line", "The last line", "The middle", "Nowhere"], 1, "The last line says what went wrong."],
 ["What voltage is safe on a Pi GPIO pin?", ["5 V", "12 V", "3.3 V", "Any"], 2, "GPIO pins are 3.3 V only."],
 ["Why does a button between GPIO27 and GND need no resistor?", ["It does", "The Pi's built-in pull-up holds the pin high", "Buttons have resistors inside", "GND is a resistor"], 1, "Pressing joins the pin to GND."],
 ["One press counts three times. Fix?", ["Use a bigger LED", "bounce_time on the Button", "Reboot", "A new Pi"], 1, "bounce_time ignores the extra contacts."],
 ["Which class dims an LED?", ["LED", "PWMLED", "Button", "Buzzer"], 1, "PWM switches fast to set brightness (Physical AI Lesson 5)."]
],
"phase-1/day-8.html": [
 ["Why does the LED strip get its own 5 V supply?", ["It looks tidier", "A strip draws amps; a GPIO pin only gives a few milliamps", "The Pi has no 5 V", "It's cheaper"], 1, "30 LEDs can draw about 1.8 A. The Pi only sends the data signal."],
 ["Why must the grounds be joined?", ["For safety colours", "The data signal needs a shared reference to be read", "To make it brighter", "They don't need to be"], 1, "Without a common ground the strip can't read the data correctly."],
 ["Which end of the strip do you connect to?", ["Either end", "The input end, following the arrows", "The middle", "The end closest to the wall"], 1, "Data flows one way; connect at DIN, where the arrows start."],
 ["Volts drop steadily from 5.0 V to 4.1 V along the strip. Likely cause?", ["Code bug", "Power: voltage drop", "Wrong Wi-Fi", "Bad SD card"], 1, "A steady drop along the strip is a power problem."],
 ["How many bits does each WS2812 LED take?", ["8", "16", "24", "32"], 2, "8 bits each for green, red and blue."],
 ["About how much current does 30 LEDs at full white draw?", ["30 mA", "180 mA", "1.8 A", "18 A"], 2, "30 × 60 mA = 1.8 A."],
 ["You ask for red, you get green. Most likely?", ["Broken strip", "Wrong colour order setting", "No ground", "Too much power"], 1, "Change RGB/GRB in the code."],
 ["Why does the far end turn yellow on white?", ["Old LEDs", "Voltage drop along the strip", "Wrong code", "Wi-Fi"], 1, "Inject power at the far end too."]
],
"phase-1/day-9.html": [
 ["What starts your service at every boot?", ["cron", "systemd, with WantedBy=multi-user.target", "The browser", "You, by hand"], 1, "systemd starts enabled services at boot."],
 ["What does Restart=on-failure do?", ["Restarts the Pi", "Starts the program again if it crashes", "Deletes the logs", "Updates Linux"], 1, "If the program falls over, systemd brings it back."],
 ["Where do you read why a service failed?", ["journalctl -u NAME", "ls -la", "ping", "nano"], 0, "The journal is the logbook; journalctl reads it."],
 ["vcgencmd get_throttled shows 0x50005. What does that suggest?", ["All fine", "A power problem", "Disk full", "Wrong time zone"], 1, "Anything other than 0x0 points to power trouble."],
 ["What does systemctl enable do?", ["Starts it now only", "Makes it start at every boot", "Deletes it", "Shows the log"], 1, "enable = at boot. Add --now to start it too."],
 ["What must you run after editing a .service file?", ["sudo reboot", "sudo systemctl daemon-reload", "git push", "nothing"], 1, "Then restart the service."],
 ["Which command shows only errors since boot?", ["journalctl -p err -b", "df -h", "ls /var", "systemctl enable"], 0, "-p err filters by priority."],
 ["A service needs packages from a venv. ExecStart should use…", ["/usr/bin/python3", "the venv's python", "sudo", "bash"], 1, "Otherwise the packages aren't found."],
 ["Which keeps a product running through small crashes?", ["Restart=always with RestartSec", "WantedBy", "Description", "User"], 0, "systemd restarts it after a pause."]
],
"phase-1/day-10.html": [
 ["Put these in order:", ["push, commit, add", "add, commit, push", "commit, push, add", "push, add, commit"], 1, "add picks the changes, commit saves them, push shares them."],
 ["What does git status show?", ["The Pi's health", "Which files changed and where they are in Git", "Your GitHub password", "Internet speed"], 1, "git status tells you what's changed, staged or committed."],
 ["Your SD card dies. With a backup, what do you do?", ["Start setup from scratch", "Swap in the labelled backup card and boot", "Buy a new Pi", "Wait"], 1, "A backup turns a dead card into a quick swap."],
 ["Why write a clear commit message?", ["GitHub requires 100 words", "So you and the team know what changed and why", "It makes code faster", "It's a password"], 1, "Each commit is a note in the history; make it useful."],
 ["Which command shares your commits with GitHub?", ["git add", "git commit", "git push", "git status"], 2, "push sends them up; pull brings others' down."],
 ["Why must passwords never be committed?", ["They're too long", "Git keeps history: they stay even if the file is deleted later", "GitHub charges", "They break Git"], 1, "Treat any committed password as public."],
 ["What does .gitignore do?", ["Deletes files", "Lists files Git should not track", "Hides GitHub", "Ignores errors"], 1, "Keep secrets and junk out of the repo."],
 ["3-2-1 backups means…", ["3 Pis, 2 cards, 1 laptop", "3 copies, 2 kinds of storage, 1 somewhere else", "Back up every 3 days", "None of these"], 1, "Copies in different places survive different disasters."],
 ["git push is rejected with “fetch first”. Next step?", ["Delete the repo", "git pull, then push", "Force push always", "Reboot"], 1, "Get the newer changes first."]
],
"phase-1/day-11.html": [
 ["A Pi is broken. Which layer do you check first?", ["Logs", "Services", "Power", "Permissions"], 2, "Every check rests on the one below. Start with power."],
 ["The Pi has power and boots, but you can't SSH in. Which layer is next?", ["Network", "LED strip", "Python", "Git"], 0, "After power and the SD card comes the network."],
 ["What must you write after fixing the fault?", ["Nothing", "A support note: what you saw, tried, what fixed it, next time", "A poem", "A new guide for every command"], 1, "Notes become the DiGiKits knowledge base."],
 ["What goes on your 'shaky' list?", ["Things you'd rather skip forever", "Topics you want to go over with your coach", "Your passwords", "Other people's mistakes"], 1, "Knowing what you don't know yet is part of passing."],
 ["What's the right order to check a dead Pi?", ["Logs, then power", "Power, card, network, services, logs", "Code first", "Random"], 1, "Bottom up: no point reading logs without power."],
 ["While fixing, how many changes at a time?", ["As many as possible", "One, then check", "None", "Three"], 1, "Otherwise you don't know what fixed it."],
 ["What does a complete support note include?", ["Only the fix", "Symptom, checks, cause, fix, prevention", "Your mood", "The date only"], 1, "So anyone can repeat or prevent it."],
 ["Which command lists every failed service?", ["systemctl --failed", "df -h", "ls", "git status"], 0, "Run it early on any sick Pi."]
],
"phase-2/day-1.html": [
 ["What does the first line #!/bin/bash do?", ["It's a comment", "It says which program runs the script", "It deletes old files", "It prints the date"], 1, "The 'shebang' line picks the shell that runs the script."],
 ["What does temp=$(command) do?", ["Runs the command and keeps its output in a variable", "Deletes temp", "Comments out the line", "Waits forever"], 0, "$( ... ) runs a command and captures what it prints."],
 ["What does a pipe | do?", ["Ends the script", "Passes one command's output into the next", "Makes a folder", "Runs as admin"], 1, "Commands can be chained: output of one is input of the next."],
 ["A script says 'Permission denied' when you run it. Fix?", ["chmod +x script.sh", "Delete it", "Reboot", "Rename it .txt"], 0, "Scripts need the run (x) permission."],
 ["What does exit code 0 mean?", ["Failed", "Worked", "Not found", "Still running"], 1, "0 = success; anything else = a kind of failure."],
 ["In cmd1 && cmd2, when does cmd2 run?", ["Always", "Only if cmd1 worked", "Only if cmd1 failed", "Never"], 1, "|| is the opposite."],
 ["Why write \"$file\" in quotes?", ["Style only", "So values with spaces stay one word", "It's faster", "Bash needs it for numbers"], 1, "Unquoted variables split on spaces."],
 ["Which shows each line of a script as it runs?", ["bash -x script.sh", "cat script.sh", "chmod +x", "man bash"], 0, "Great for finding where it goes wrong."],
 ["“bad interpreter: /bin/bash^M” means…", ["Bash is missing", "Windows line endings in the file", "No permission", "Wrong Pi"], 1, "Strip the \\r characters."]
],
"phase-2/day-2.html": [
 ["What does */10 * * * * mean in cron?", ["Every 10 hours", "Every 10 minutes", "At 10:00 every day", "10 times a minute"], 1, "The first field is minutes: every 10 minutes."],
 ["Your cron job never runs but works in the terminal. Likely cause?", ["Cron doesn't know your PATH or shortcuts: use full paths", "The Pi is too fast", "Cron only runs on Mondays", "The script is too short"], 0, "Cron runs with a minimal environment; use full paths."],
 ["What shows when each systemd timer runs next?", ["systemctl list-timers", "ls -la", "ping", "df -h"], 0, "list-timers shows last and next runs."],
 ["When is a timer better than cron?", ["Never", "For jobs customers depend on: logs, status, runs after boot", "Only for games", "When you have no Pi"], 1, "Timers give you logs, status and boot handling."],
 ["When does 0 9 * * 1-5 run?", ["Every 9 minutes", "09:00 Monday to Friday", "9th of each month", "Every Monday"], 1, "minute hour day month weekday."],
 ["Why use full paths in cron jobs?", ["Cron is slow", "Cron has a very short PATH", "It looks nicer", "Cron can't read ~"], 1, "And ~ isn't expanded either: write /home/…"],
 ["What does Persistent=true do on a timer?", ["Runs forever", "Catches up a run that was missed while the Pi was off", "Keeps logs", "Repeats every minute"], 1, "Good for shop opening-hour jobs."],
 ["What keeps a log file from growing forever?", ["cron", "logrotate", "chmod", "git"], 1, "It starts new files and deletes old ones."],
 ["The timer fires at the wrong hour. Check first…", ["Wi-Fi", "The time zone with timedatectl", "The power supply", "Docker"], 1, "Timers use the Pi's own clock."]
],
"phase-2/day-3.html": [
 ["What is kiosk mode?", ["A browser showing only one page full screen, no desktop", "A shopping app", "A power-saving mode", "A type of cable"], 0, "Kiosk mode shows just the page, ready for customers."],
 ["Which file starts the browser at boot on labwc?", ["~/.config/labwc/autostart", "/etc/passwd", "README.md", "health.log"], 0, "The labwc autostart file runs programs when the desktop starts."],
 ["After boot the page says 'This site can't be reached', then works later. Why?", ["The browser started before the network was ready", "The TV is broken", "The page was deleted", "The SD card is full"], 0, "It's a race: make the browser wait for the network."],
 ["How do you test that a kiosk survives a power cut?", ["Pull the plug and plug it back in", "Turn off the TV only", "Restart the browser", "Ask the customer"], 0, "The real test is a real power cut."],
 ["The desktop shows but no browser. Which link broke?", ["Power", "Auto-login", "Autostart / kiosk script", "The TV"], 2, "Find the last link that worked."],
 ["Why does kiosk.sh loop with curl before starting the browser?", ["To download Chromium", "To wait until the page can be reached", "To update the Pi", "No reason"], 1, "Otherwise the browser wins the race and shows an error."],
 ["What does --incognito help with?", ["Speed", "No “Restore pages?” bubble after power cuts", "Hides the mouse", "Security updates"], 1, "No saved session, nothing to restore."],
 ["How can you see what a kiosk shows from home?", ["Ask the customer", "Take a screenshot over SSH with grim", "Reboot it", "You can't"], 1, "Then copy it to your laptop with scp."]
],
"phase-2/day-4.html": [
 ["What does HDMI-CEC let the Pi do?", ["Charge the TV", "Switch the TV on and off over the HDMI cable", "Stream music", "Change TV channels only"], 1, "CEC sends control commands down the same cable as the picture."],
 ["The command echo 'standby 0' | cec-client -s -d 1 does what?", ["Turns the TV on", "Puts the TV in standby", "Scans for devices", "Reboots the Pi"], 1, "standby 0 switches device 0 (the TV) off."],
 ["What tells staff which mode the screen is in?", ["The LED next to the button", "The router lights", "The Pi's fan", "Nothing"], 0, "The LED shows the mode at a glance."],
 ["The screen is dark at 9:00. Which is NOT a likely cause?", ["Timer didn't run", "CEC failed", "TV on the wrong input", "Someone changed the GitHub username"], 3, "The other three are real suspects with remote tests."],
 ["Which CEC address is always the TV?", ["0", "1", "4", "15"], 0, "The Pi is usually 4."],
 ["The TV turns on but shows another input. Send…", ["standby 0", "as", "scan", "pow 0"], 1, "as = active source: switch to me."],
 ["Why does modes.py set WAYLAND_DISPLAY?", ["For sound", "So a browser started from SSH or a service shows on the screen", "For Wi-Fi", "For CEC"], 1, "Without it the program doesn't know which display to use."],
 ["Which command checks the TV's power state remotely?", ["echo 'pow 0' | cec-client -s -d 1", "ping tv", "df -h", "vcgencmd"], 0, "on or standby."]
],
"phase-2/day-5.html": [
 ["An IP address is the building. What is a port?", ["The roof", "A door to one service", "The router", "The cable"], 1, "Each service listens on its own port."],
 ["What shows which ports are listening?", ["sudo ss -tlnp", "cat notes.txt", "df -h", "whoami"], 0, "ss -tlnp lists listening TCP ports and their programs."],
 ["Before running sudo ufw enable, what must you allow?", ["Port 80", "SSH", "Nothing", "Port 5000 only"], 1, "Allow SSH first, or you lock yourself out."],
 ["A server listens on 127.0.0.1. Who can reach it?", ["The whole network", "Only programs on the Pi itself", "Only the router", "Everyone on the internet"], 1, "127.0.0.1 is localhost; use 0.0.0.0 for the network."],
 ["A service listens on 127.0.0.1:5000. Who can reach it?", ["Everyone", "Only programs on the Pi itself", "Only the laptop", "Nobody"], 1, "Use 0.0.0.0 to listen on all networks."],
 ["Which port does SSH use?", ["22", "53", "80", "5000"], 0, "Web is 80/443, DNS 53."],
 ["TCP is like…", ["A postcard", "A phone call: connected, in order, re-sent if lost", "A radio", "A letter with no address"], 1, "UDP is the postcard."],
 ["What must you allow before ufw enable over SSH?", ["Port 80", "SSH", "Port 5000", "Nothing"], 1, "Or you lock yourself out."],
 ["It works on the Pi by IP but not from the laptop. Suspect…", ["The code", "Firewall or network", "The LED", "Python version"], 1, "Near to far: the break is between the Pi and the laptop."]
],
"phase-2/day-6.html": [
 ["About how much current do 120 WS2812 LEDs draw at full white?", ["0.7 A", "7.2 A", "72 A", "1.2 A"], 1, "120 × 0.06 A = 7.2 A worst case."],
 ["The far end of a long strip is dim and yellow. Fix?", ["Power injection at more points", "A faster Pi", "Shorter code", "A new Wi-Fi password"], 0, "Feed power in at several points to beat voltage drop."],
 ["Where does the fuse go?", ["Near the supply", "At the end of the strip", "Inside the Pi", "Nowhere"], 0, "A fuse near the supply protects the wiring."],
 ["Who works on 120 V mains wiring?", ["You", "A licensed electrician", "The customer", "Anyone careful"], 1, "You work on low voltage only."],
 ["120 LEDs at full white, worst case?", ["1.2 A", "7.2 A", "72 A", "0.7 A"], 1, "120 × 60 mA = 7.2 A."],
 ["Which wire is thicker?", ["22 AWG", "14 AWG", "They're the same", "AWG isn't thickness"], 1, "Smaller AWG number = thicker wire."],
 ["Where does the fuse go?", ["At the far end of the strip", "Near the supply", "In the data line", "Nowhere"], 1, "So it protects the whole wire run."],
 ["Below about what voltage do WS2812 colours go wrong?", ["4.5 V", "3.3 V", "12 V", "1 V"], 0, "White turns yellow first."],
 ["Why keep the data wire short?", ["Cheaper", "Long data wires pick up noise", "Faster colours", "Less heat"], 1, "Run the power long, keep data short."]
],
"phase-2/day-7.html": [
 ["How is a microcontroller different from a Pi?", ["It's a full computer with Linux", "It runs one job, starts in a blink and rarely crashes", "It has no pins", "It needs a monitor"], 1, "A microcontroller is a tiny computer for one job."],
 ["How do you put the Pico into its file-copy mode?", ["Hold BOOTSEL while plugging in USB", "Press Ctrl+C", "Remove the SD card", "Shake it"], 0, "Hold BOOTSEL, plug in, release: a drive appears."],
 ["Which file runs automatically when the Pico powers on?", ["main.py", "start.txt", "index.html", "README.md"], 0, "Save your program as main.py on the board."],
 ["The Pico doesn't show up on USB. A common cause?", ["Charge-only USB cable", "Too much RAM", "Wrong time zone", "Firewall"], 0, "Some cables only carry power, not data."],
 ["Which file runs by itself at power-on?", ["start.py", "main.py", "run.py", "code.txt"], 1, "main.py on the board."],
 ["What is the REPL?", ["A cable", "A live prompt that runs Python lines on the board", "A file", "A Pi"], 1, "Test pins before writing a program."],
 ["A Pico or a Pi: which starts in under a second?", ["Pi", "Pico", "Both", "Neither"], 1, "No operating system to load."],
 ["The board resets when the strip goes white. Why?", ["Bad code", "Strip drawing power from the board's supply", "Wrong file name", "Wi-Fi"], 1, "Separate supply, shared ground."]
],
"phase-2/day-8.html": [
 ["Image versus container?", ["Same thing", "Image is the package; container is a running copy", "Container is the package; image is running", "Images are only photos"], 1, "One image, many containers, like a recipe and the cakes."],
 ["In -p 8080:80, which number is inside the container?", ["8080", "80", "Both", "Neither"], 1, "Outside 8080 maps to inside 80."],
 ["What does a volume do?", ["Makes it louder", "Shares a folder between the Pi and the container", "Deletes the container", "Opens a port"], 1, "Volumes let a container use files from the host."],
 ["'Port is already allocated.' What does it mean?", ["Something else is already using that port", "The Pi is off", "Docker isn't installed", "The image is too big"], 0, "Find what holds the door with docker ps or ss -tlnp."],
 ["What happens to data inside a container when you rm it?", ["It's kept", "It's deleted", "It goes to GitHub", "It moves to /home"], 1, "Use volumes for data that must survive."],
 ["“exec format error” usually means…", ["Wrong port", "Image built for a different CPU type", "No internet", "Disk full"], 1, "The Pi needs arm64 images."],
 ["Which brings a container back after a reboot?", ["--restart unless-stopped", "-p 8080:80", "-v", "--name"], 0, "Like Restart=always."],
 ["How do you open a shell inside the container web?", ["docker ps web", "docker exec -it web sh", "ssh web", "docker logs web"], 1, "exit to leave."],
 ["Why avoid the latest tag in products?", ["It's slower", "It can change to a new version without you knowing", "It's paid", "It's not allowed"], 1, "Pin exact versions."]
],
"phase-2/day-9.html": [
 ["What does docker compose up -d do?", ["Starts all services in the compose file in the background", "Deletes everything", "Updates Linux", "Opens a browser"], 0, "One file, one command, the whole app."],
 ["Which setting brings containers back after a reboot?", ["restart: unless-stopped", "ports:", "image:", "volumes:"], 0, "The restart policy handles reboots."],
 ["Why is indentation important in compose.yaml?", ["It isn't", "YAML uses indentation to know what belongs to what", "It saves disk space", "It's only for looks"], 1, "Wrong spaces change the meaning of a YAML file."],
 ["A container keeps restarting. First step?", ["Read its logs", "Delete the Pi", "Change the port", "Buy more RAM"], 0, "docker compose logs tells you why it falls over."],
 ["What does docker compose down -v also delete?", ["Nothing more", "Named volumes: the data", "The compose file", "Docker itself"], 1, "Almost never use -v on a customer system."],
 ["Where do per-site settings and passwords go?", ["compose.yaml in Git", ".env, not committed", "The README", "Docker Hub"], 1, "Same compose file everywhere, different .env."],
 ["How do you check a compose file before starting?", ["docker compose config", "cat", "git status", "docker ps"], 0, "It shows the exact problem line."],
 ["An update went wrong. Fastest way back?", ["Re-flash the card", "Put the old tag back and up -d", "Delete volumes", "Reboot"], 1, "Data is in volumes; the version is just a tag."],
 ["YAML indentation uses…", ["Tabs", "Spaces", "Either", "Nothing"], 1, "Tabs break YAML."]
],
"phase-2/day-10.html": [
 ["Why work on a branch?", ["To hide work", "So changes are reviewed before they reach main", "Branches are faster", "GitHub charges for main"], 1, "Nobody edits main directly."],
 ["What closes issue #12 when the pull request merges?", ["Writing 'Fixes #12' in the PR", "Deleting the issue", "Pushing twice", "Renaming the branch"], 0, "'Fixes #N' links and closes the issue on merge."],
 ["Your push is rejected because the remote has new commits. Fix?", ["Force push over them", "git pull, fix any conflict, then push", "Delete the repo", "Wait a day"], 1, "Get teammates' changes first, then send yours."],
 ["What should a pull request description say?", ["Nothing", "What changed and why, in a line or two", "Your password", "A full novel"], 1, "Short and clear helps the reviewer."],
 ["Two people changed the same line. Git…", ["Picks the newest", "Marks a conflict for you to resolve", "Deletes both", "Crashes"], 1, "You choose, remove the markers, commit."],
 ["The reviewer asked for a change. You…", ["Open a new PR", "Push a new commit to the same branch", "Delete the branch", "Merge anyway"], 1, "The PR updates itself."],
 ["Which makes a bug report useful?", ["“It's broken”", "Steps, expected, actual, where, evidence", "Only a screenshot", "All capitals"], 1, "Someone else must be able to repeat it."],
 ["Why keep pull requests small?", ["GitHub limit", "Faster, safer reviews", "Saves disk", "No reason"], 1, "One change, one reason."]
],
"phase-2/day-11.html": [
 ["What goes at the top of a guide?", ["Your name only", "What it sets up, what you need, how long it takes", "The last step", "A joke"], 1, "The reader knows what they're in for before starting."],
 ["How many actions per numbered step?", ["One", "As many as fit", "Three", "Zero"], 0, "One action per step keeps people from skipping things."],
 ["What should come after important steps?", ["'You should see …'", "A new chapter", "Nothing", "A password"], 0, "Tell the reader what success looks like."],
 ["When is a guide finished?", ["When you finish writing it", "When someone else succeeds with it on a fresh card", "When it's long", "Never"], 1, "Test it on someone else and fix where they got stuck."],
 ["When is a guide finished?", ["When you've written it", "When someone else succeeded with it", "When it's long", "Never"], 1, "Test it on a fresh card."],
 ["Where does a warning go?", ["At the end", "Before the risky step", "In a footnote", "Nowhere"], 1, "The reader must see it before acting."],
 ["Which is the better step?", ["Configure Wi-Fi properly", "Run sudo nmtui → Activate a connection → DGK-LAB", "Just set it up", "Ensure connectivity"], 1, "One exact action."],
 ["Can you publish an AI-drafted guide without testing?", ["Yes", "No: AI may invent menu names or options", "Only on Fridays", "If it's short"], 1, "Test every step yourself."]
],
"phase-2/day-12.html": [
 ["Where do you give each Pi a short name for SSH?", ["~/.ssh/config", "/etc/hosts only", "README.md", "health.log"], 0, "Host entries in ~/.ssh/config make 'ssh screen1' work."],
 ["Why rsync instead of scp for a website folder?", ["rsync copies only what changed", "scp is illegal", "rsync deletes the Pi", "No difference"], 0, "Only changed files travel, which is much faster."],
 ["Your loop hangs on one dead machine. Fix?", ["ssh -o ConnectTimeout=5", "Remove the loop", "Use more Pis", "Turn off Wi-Fi"], 0, "A timeout lets the loop report the failure and move on."],
 ["What does for h in screen1 screen2; do ssh \"$h\" uptime; done do?", ["Runs uptime on both Pis, one after the other", "Deletes both", "Only checks screen1", "Nothing"], 0, "One loop, many machines."],
 ["What does BatchMode=yes do?", ["Faster ssh", "Fails instead of asking for a password", "Runs in parallel", "Copies keys"], 1, "So one machine can't stall the loop."],
 ["What is a canary rollout?", ["Update all at once", "Update one first, watch, then the rest", "Never update", "Update at night"], 1, "A problem hits one, not all."],
 ["Why is rsync --delete dangerous?", ["It's slow", "It deletes files on the target that aren't in the source", "It needs root", "It changes names"], 1, "Dry-run first."],
 ["What is drift?", ["Wi-Fi moving", "Machines that should be the same slowly becoming different", "A slow disk", "Clock error"], 1, "Golden image + settings in Git prevent it."]
],
"phase-2/day-13.html": [
 ["What is the goal of monitoring?", ["More emails", "Find problems before the customer calls", "Slow the Pi down", "Replace backups"], 1, "Good support is mostly invisible."],
 ["Why add retries before an alert?", ["To avoid false alarms from one lost packet", "To make alerts slower on purpose", "Kuma needs them", "No reason"], 0, "Retries stop jumpy alerts; too many make them slow."],
 ["Which reading should trigger a health warning?", ["Temperature over 75 °C", "Disk at 20%", "Power 0x0", "Uptime 3 days"], 0, "75 °C is the warning limit in your health script."],
 ["What does logrotate prevent?", ["Logs filling the disk", "Wi-Fi drops", "Power cuts", "Typos"], 0, "Old logs are compressed and removed on a schedule."],
 ["What is a push monitor?", ["Kuma pings the Pi", "The Pi calls Kuma; silence = alert", "A phone app", "A button"], 1, "Catches both dead and sick Pis."],
 ["Why alert only after 2–3 failed checks?", ["To save power", "To avoid alerts for short blips", "Kuma requires it", "No reason"], 1, "Fewer false alarms."],
 ["Kuma is green but the screen is blank. Why?", ["Kuma is broken", "It checks the server, not what the screen shows", "The TV is fine", "DNS"], 1, "Add a push check from the kiosk Pi."],
 ["Who watches the monitoring Pi?", ["Nobody needs to", "Something outside it, e.g. a second check", "Itself", "The client"], 1, "Otherwise its death is silent."]
],
"phase-2/day-14.html": [
 ["Which voltage range is your job?", ["5–24 V", "120 V", "240 V", "Any"], 0, "Low voltage only. Mains is for licensed electricians."],
 ["You smell burning near an LED supply. First step?", ["Power off now", "Take a video", "Keep testing", "Tap it"], 0, "Heat or smell: power off now, then investigate."],
 ["Before handling a bare board?", ["Touch grounded metal or wear a wrist strap", "Wash it", "Blow on it", "Nothing"], 0, "Static (ESD) can kill electronics."],
 ["A fix you can't undo on a customer's system. What do you do?", ["Stop and call your coach first", "Do it quickly", "Ask the customer to do it", "Skip the photo"], 0, "When in doubt, it's a stop."],
 ["What is the main danger of a big 5 V supply?", ["Electric shock", "Heat and fire from shorts", "Radiation", "None"], 1, "High current can melt wires."],
 ["Why never measure current across a power supply?", ["It's slow", "On A, the meter is almost a wire: a short", "It's illegal", "It wastes battery"], 1, "Measure volts across a supply."],
 ["Smoke from a strip. First step?", ["Take a photo", "Power off", "Call the client", "Touch it to check"], 1, "Then step back, then call."],
 ["A client asks you to rewire an outlet.", ["Do it carefully", "Stop: that's a licensed electrician's job", "Do it with gloves", "Ask Claude how"], 1, "Mains is never our job."]
],
"phase-2/day-15.html": [
 ["What do you follow to build the gate system?", ["Only your own written guide", "Your memory", "A video", "Your coach's hands"], 0, "The gate tests your guide as much as your skills."],
 ["What proves the system is ready?", ["It works after a power cut with no keyboard attached", "It looks nice", "It booted once", "The fan is quiet"], 0, "Customers' systems must recover on their own."],
 ["Where do alerts go?", ["Your phone", "A drawer", "The TV", "Nowhere"], 0, "Monitoring sends alerts to your phone."],
 ["You had to think during setup. What now?", ["Fix the guide at that step", "Ignore it", "Delete the guide", "Start Phase 3 anyway"], 0, "Every place you had to think is a place someone else will get stuck."],
 ["What must work after a power cut?", ["Only the Pi", "Everything, with no keyboard", "Only monitoring", "Nothing"], 1, "That's what customers experience."],
 ["Where do you post your evidence?", ["Email", "This lesson's message board", "Nowhere", "A USB stick"], 1, "Guide PR link, Kuma screenshot, one photo."],
 ["Your guide made you think at step 9. What do you do?", ["Ignore it", "Fix the guide and merge the change", "Delete the step", "Tell nobody"], 1, "That's part of passing."]
],
"phase-3/day-1.html": [
 ["The lobby screen is dark during opening hours. Severity?", ["1 · down", "2 · broken, workaround", "3 · question", "No ticket needed"], 0, "The customer can't use it at all: severity 1."],
 ["Which status means it's the customer's move?", ["Open", "Waiting on customer", "Fixed", "Closed"], 1, "The status says whose move it is."],
 ["When do you update the customer?", ["At every step, even with no news", "Only when fixed", "Never", "Once a month"], 0, "Silence feels like nobody's working."],
 ["What closes a ticket?", ["The customer confirms, and you write a support note", "Time passes", "You get bored", "A reboot"], 0, "Confirmed fix plus a note."]
],
"phase-3/day-2.html": [
 ["What is the first step of the fault-finding method?", ["Reproduce: see the problem yourself", "Replace parts", "Reboot everything", "Write the report"], 0, "See it yourself before guessing."],
 ["Why ask 'What changed?'", ["Most faults follow a change", "To blame someone", "It's polite", "It fills time"], 0, "Updates, moves, power cuts and new cables cause most faults."],
 ["Why change one thing at a time?", ["So you know which change fixed it", "It's slower on purpose", "Rules are rules", "To save parts"], 0, "Otherwise you don't know why it works."],
 ["Six parts in a chain. With 'split in half', how many tests at most?", ["About 3", "6", "12", "1"], 0, "Each test throws away half the suspects."]
],
"phase-3/day-3.html": [
 ["Which line breaks the rules for customer replies?", ["'I'll check again tomorrow at 9:00.'", "'This will never happen again.'", "'Thanks for letting us know.'", "'I switched it back and it's showing.'"], 1, "Never promise perfect. Promise to catch problems fast."],
 ["What should every reply say?", ["What you found, what you did, what happens next with a time", "Only 'fixed'", "Technical details first", "Who caused it"], 0, "Customers calm down when they know what happens next."],
 ["The customer uses no technical words. You should…", ["Use plain words too", "Explain systemd in detail", "Paste the logs", "Use acronyms"], 0, "No jargon unless the customer uses it first."],
 ["You don't know the cause yet. What do you say?", ["'I'm looking into it and will update you by 3:00'", "A guess that sounds confident", "Nothing", "'It's your network'"], 0, "Never guess out loud; give a time for the next update."]
],
"phase-3/day-4.html": [
 ["Before connecting to a customer's system you must…", ["Ask permission and tell them when you start", "Just connect", "Email your password", "Turn off their firewall"], 0, "Ask first, every time."],
 ["The customer emails you their password. What do you do?", ["Don't use it, ask them to change it, use the approved access method", "Use it once", "Save it for later", "Forward it to your coach"], 0, "A password in email is no longer secret."],
 ["What does 'least access' mean?", ["Touch only the system the ticket is about", "Look at everything while you're in", "Use the least time", "Use a small screen"], 0, "Having a way in doesn't mean you may look around."],
 ["What must you do at the end of a session?", ["Remove temporary access and confirm with the customer", "Leave it open for next time", "Copy their files", "Nothing"], 0, "Undo temporary access and tell them you're finished."]
],
"phase-3/day-5.html": [
 ["How should a knowledge-base title be written?", ["In the customer's words, e.g. 'Screen is dark after a power cut'", "As a code name", "In engineer terms only", "As short as possible: 'Bug'"], 0, "Write it the way a customer would search for it."],
 ["Why do clear articles matter so much at DiGiKits?", ["AI helpers answer customers from them", "They look good", "They're required by law", "They replace testing"], 0, "Better articles mean better AI answers and fewer tickets."],
 ["What section tells the customer what to send support?", ["If that didn't work", "Title", "Applies to", "Cause"], 0, "Every article ends with what to do if the fix fails."],
 ["The AI gave a wrong answer from your article. What do you fix?", ["The article", "The AI", "The customer", "Nothing"], 0, "If the AI misreads it, a tired customer will too."]
],
"phase-3/day-6.html": [
 ["Which is a good use of Claude in support?", ["Explaining an unfamiliar error message", "Pasting a customer's password", "Running any command it gives you with sudo", "Sending its reply without reading it"], 0, "Use it to explain, draft and suggest, then check."],
 ["What goes into a good support question to Claude?", ["Context, the exact symptom, evidence with secrets removed, what you tried, what you want", "Just 'it's broken'", "The customer's full files", "Only the device name"], 0, "The same facts you'd give a senior engineer."],
 ["Claude suggests a command you don't understand. You…", ["Don't run it until you understand it", "Run it with sudo", "Run it twice", "Paste it to the customer"], 0, "Never run what you don't understand, especially sudo or rm."],
 ["Who owns a reply that Claude drafted?", ["You: you send it, so read every word", "Claude", "Anthropic", "The customer"], 0, "You send it, so you own it."]
],
"phase-3/day-7.html": [
 ["How long should the daily check take?", ["About 5 minutes", "2 hours", "All day", "It's weekly"], 0, "Five minutes of checks saves hours of repair."],
 ["Updates are waiting on live systems. You…", ["Schedule them, don't run them blind", "Run them all now", "Ignore them forever", "Uninstall apt"], 0, "Plan updates for a safe time."],
 ["What goes in the operations log?", ["Date, what you checked, found and did", "Your lunch", "Passwords", "Only problems"], 0, "A record of every day's check."],
 ["What makes a daily-check script useful?", ["One summary line per Pi, so the odd one stands out", "Lots of colours", "Long output", "It runs once a year"], 0, "Your eye goes straight to the line that isn't OK."]
],
"phase-3/day-8.html": [
 ["Which situation do you escalate right away?", ["Smoke or heat near equipment", "A customer asks how to change the schedule", "A typo in a guide", "A green dashboard"], 0, "Safety always escalates."],
 ["First thing in an incident?", ["Make it safe", "Find the root cause", "Write the review", "Order parts"], 0, "Safety, then people, then the log, then the fix."],
 ["Restore service or find the root cause first?", ["Restore service first, root cause after", "Root cause first", "Neither", "Ask the customer"], 0, "Get the customer running, then investigate."],
 ["What kind of review follows an incident?", ["No blame: what let it happen and how to catch it faster", "Find who to blame", "No review", "A long apology only"], 0, "Ask 'what let this happen?', never 'who did it?'"]
],
"phase-3/day-9.html": [
 ["In a shadow case, who does the work?", ["You, with your coach watching", "Your coach", "Claude alone", "The customer"], 0, "You drive; your coach steps in only if something could go wrong."],
 ["What happens after each shadow case?", ["A 5-minute review: what went well, one thing to do better", "Nothing", "A test", "A day off"], 0, "Short reviews make each case better than the last."],
 ["Which steps does a shadow case follow?", ["The full flow: ticket, diagnose, fix or escalate, reply, close, note", "Only the fix", "Only the reply", "Only the note"], 0, "Real cases, the full flow."]
],
"phase-3/day-10.html": [
 ["How many real cases does the gate ask for?", ["5", "1", "10", "20"], 0, "Five real cases, start to finish."],
 ["Which is NOT a check for each case?", ["Correct severity", "Replies on time", "A clear log", "Fixed in under 5 minutes"], 3, "Speed isn't the test; doing it right is."],
 ["At least one case must be…", ["Fixed remotely, by the rules", "Escalated", "Closed without the customer", "Done on a weekend"], 0, "Remote support done properly is core to the job."],
 ["What else must come out of these cases?", ["At least one knowledge-base article written or improved", "A new product", "A blog post", "Nothing"], 0, "Every case should make the next one faster."]
],
"phase-4/day-1.html": [
 ["In most CAD tools, which axis points up?", ["X", "Y", "Z", "W"], 2, "X left–right, Y front–back, Z up."],
 ["A 1 m desk in a DiGiKits model is…", ["1 unit", "100 mm", "1000 mm", "10 mm"], 2, "DiGiKits works in millimetres at real scale."],
 ["Which file type is exact CAD for making parts?", ["STEP", "STL", "GLB", "JPG"], 0, "STEP keeps exact shapes; STL and GLB are meshes."],
 ["Which file type is best for showing a coloured model on the web?", ["GLB / glTF", "STEP", "TXT", "DWG"], 0, "GLB is a mesh with colours, made for the web."]
],
"phase-4/day-2.html": [
 ["What does 'fully constrained' mean?", ["Every size and position in the sketch is fixed", "The file is locked", "The part is finished", "It's printed"], 0, "FreeCAD changes the colour when nothing can move any more."],
 ["What does Pad do?", ["Turns a flat sketch into a solid with thickness", "Deletes a sketch", "Adds colour", "Exports STL"], 0, "Pad extrudes the sketch, e.g. 3 mm."],
 ["The holes are 3.2 mm across. Why that size?", ["To fit M3 screws with a little clearance", "It's random", "It's the biggest drill", "To save weight"], 0, "3.2 mm gives an M3 screw room to pass."],
 ["Which two formats do you export?", ["STEP and STL", "JPG and PNG", "DOC and PDF", "MP3 and MP4"], 0, "STEP for CAD, STL for printing."]
],
"phase-4/day-3.html": [
 ["What holds the Pi off the bottom of the enclosure?", ["Standoffs at its mounting holes", "Glue", "Tape", "Nothing"], 0, "Standoffs line up with the Pi's holes."],
 ["The Pi 5's mounting holes are how far apart the long way?", ["58 mm", "85 mm", "49 mm", "100 mm"], 0, "58 mm by 49 mm, 3.5 mm from the edges."],
 ["You change the wall thickness. What should happen?", ["The whole model updates", "Nothing", "The file breaks", "You redraw everything"], 0, "That's the point of a well-built parametric model."],
 ["Where should the measurements come from?", ["Your real Pi or its official drawing", "A guess", "A photo", "Memory"], 0, "Measure twice, model once."]
],
"phase-4/day-4.html": [
 ["Why build 3D models from code?", ["Change one number, keep it on GitHub, check it automatically, let AI help write it", "Code looks cool", "It's the only way", "It's always faster for beginners"], 0, "That's how DiGiKits makes fast, exact concepts."],
 ["In CadQuery, what does .hole(3.2) do?", ["Drills 3.2 mm holes at the selected points", "Makes a 3.2 mm thick plate", "Rounds corners", "Exports a file"], 0, "Each line of code is one step of the shape."],
 ["What does .edges(\"|Z\").fillet(2) do?", ["Rounds the vertical edges by 2 mm", "Cuts the part in half", "Adds 2 holes", "Moves the part up"], 0, "Selects edges parallel to Z and rounds them."],
 ["You change box(100, 60, 3) to box(120, 60, 3). Result?", ["The plate becomes 120 mm long", "Nothing", "The holes vanish", "An error"], 0, "Edit one number, get a new part."]
],
"phase-4/day-5.html": [
 ["Why put every size in variables at the top?", ["One place to change, no hidden numbers", "Python requires it", "It's faster to run", "To make the file longer"], 0, "No magic numbers buried in the code."],
 ["How do you check the board doesn't collide with the enclosure?", ["Intersect them and confirm the result is empty", "Look at it", "Print it", "Ask Claude to guess"], 0, "An empty intersection means no collision."],
 ["The intersection isn't empty. What does it mean?", ["Parts overlap: fix before making anything", "Everything is fine", "The file is corrupt", "The Pi is broken"], 0, "A clash found in code saves a failed print."],
 ["What goes in the README?", ["What each variable means", "Your password", "Nothing", "Only the date"], 0, "Someone else should be able to change it safely."]
],
"phase-4/day-6.html": [
 ["What draws the scene onto the page?", ["The renderer", "The camera", "The light", "The mesh"], 0, "The renderer films what the camera sees."],
 ["A mesh is made of…", ["Geometry and material", "Only colour", "A camera and a light", "HTML"], 0, "Geometry is the shape, material is how it looks."],
 ["What does camera.lookAt(0, 0, 0) do?", ["Points the camera at the middle of the scene", "Moves the box", "Turns off lights", "Saves the page"], 0, "The camera aims at the origin."],
 ["Why open the page through python3 -m http.server?", ["Browsers block some features on plain files; a local server avoids that", "It makes 3D faster", "It's required for colours", "No reason"], 0, "Modules and loading files work properly from a server."]
],
"phase-4/day-7.html": [
 ["Which file format do you load with GLTFLoader?", ["GLB / glTF", "STEP", "DOCX", "CSV"], 0, "GLB is the web-friendly mesh format."],
 ["What does OrbitControls give the viewer?", ["Rotate, zoom and pan with mouse or touch", "Sound", "Faster loading", "A login page"], 0, "Drag to rotate, scroll or pinch to zoom, right-drag to pan."],
 ["Where can you publish the page for free?", ["GitHub Pages", "Your SD card", "A USB stick", "Email"], 0, "This training site uses GitHub Pages too."],
 ["How do you show it on the Big Screen?", ["Kiosk mode pointing at the page's address", "Copy the GLB to the TV", "Print it", "Use CEC only"], 0, "Your Phase 2 kiosk can show any web page."]
],
"phase-4/day-8.html": [
 ["A good project sits where…", ["What you care about meets what DiGiKits can use", "It's the biggest idea", "It's the easiest", "Nobody will see it"], 0, "Pick from the overlap and you'll keep going."],
 ["How long is the first milestone?", ["One week", "One day", "Six months", "No milestone"], 0, "The brief sets a one-week first milestone."],
 ["How many 'done when' checks go in the brief?", ["Three", "One", "Ten", "None"], 0, "Three clear checks."],
 ["Where is the brief saved?", ["In a new GitHub repo", "On paper only", "In an email", "Nowhere"], 0, "Everything lives on GitHub."]
],
"phase-4/day-9.html": [
 ["What should the first milestone look like?", ["A thin version that works end to end", "One perfect part, nothing else working", "Only plans", "A finished product"], 0, "Everything works a little, then improve each part."],
 ["How often do you commit?", ["At least once a day", "Once at the end", "Never", "Once a month"], 0, "Small, regular commits with clear messages."],
 ["Claude writes code for your project. You…", ["Check and understand it before using it", "Paste it unread", "Delete it", "Send it to customers"], 0, "Day 2 rules: check its work like a machine."],
 ["What do you post on the message board?", ["One screenshot and one line", "Your full code", "Nothing", "Passwords"], 0, "Short progress posts keep your coach in the loop."]
],
"phase-4/day-10.html": [
 ["How long is the demo?", ["5 minutes", "1 hour", "30 seconds", "A full day"], 0, "Five minutes: what, how, next."],
 ["What should the demo start with?", ["The project running", "Slides about yourself", "An apology", "The code"], 0, "Show the running thing first."],
 ["What must the README contain?", ["What it is, how to run it, what's next", "Only the title", "Your passwords", "Nothing"], 0, "Someone else should be able to run it."],
 ["What setup is allowed during the demo?", ["None: it runs without setup", "Install everything live", "Reboot twice", "Borrow a laptop"], 0, "Prepare beforehand so the demo just runs."]
]
};
