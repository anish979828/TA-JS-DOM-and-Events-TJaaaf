let allCommands = [
    {
      command: "ls",
      description:
        "Lists all files and directories in the present working directory",
    },
    {
      command: "ls -R",
      description: "Lists files in sub-directories as well",
    },
    {
      command: "ls -a",
      description: "Lists hidden files as well",
    },
    {
      command: "ls -al",
      description:
        "Lists files and directories with detailed information like permissions, size, owner, etc.",
    },
    {
      command: "cat > filename",
      description: "Creates a new file",
    },
    {
      command: "lcat filename",
      description: "Displays the file content",
    },
    {
      command: "cat file1 file2 > file3",
      description:
        "Joins two files (file1, file2) and stores the output in a new file (file3)",
    },
    {
      command: "mv  file 'new file path'",
      description: "Moves the files to the new location",
    },
    {
      command: "mv filename new_file_name",
      description: "Renames the file to a new filename",
    },
    {
      command: "sudo",
      description:
        "Allows regular users to run programs with the security privileges of the superuser or root",
    },
    {
      command: "rm filename",
      description: "Deletes a file",
    },
    {
      command: "man",
      description: "Gives help information on a command",
    },
    {
      command: "history",
      description:
        "Gives a list of all past commands typed in the current terminal session",
    },
    {
      command: "clear",
      description: "Clears the terminal",
    },
    {
      command: "mkdir directoryname",
      description:
        "Creates a new directory in the present working directory or a at the specified path",
    },
    {
      command: "rmdir",
      description: "Deletes a directory",
    },
    {
      command: "pr -n",
      description: "Denotes the file with Line Numbers",
    },
    {
      command: "pr -h",
      description: "Assigns a header to the file",
    },
    {
      command: "lp -nc",
      description: "Prints 'c' copies of the File",
    },
    {
      command: "lpr c",
      description: "Prints 'c' copies of the File",
    },
    {
      command: "lp -d",
      description: "Specifies name of the printer",
    },
    {
      command: "lp -p",
      description: "Specifies name of the printer",
    },
    {
      command: "apt-get",
      description: "Command used to install and update packages",
    },
    {
      command: "mail -s 'subject' -c 'cc-address' -b 'bcc-address' 'to-address",
      description: "Command to send email",
    },
    {
      command: "mail -s 'Subject' to-address < Filename",
      description: "Command to send email with attachment",
    },
    {
      command: "whereis app",
      description: "Show possible locations of app",
    },
  
    {
      command: "tar cf file.tar file",
      description: "Create tar named file.tar containing file",
    },
    {
      command: "tar xf file.tar",
      description: "Extract the files from file.tar",
    },
    {
      command: "tar xjf file.tar.bz2",
      description: "Extract a tar using Bzip2",
    },
    {
      command: "gzip file",
      description: "Compresses file and renames it to file.gz",
    },
  
    {
      command: "gzip -d file.gz",
      description: "Decompresses file.gz back to file",
    },
    {
      command: "ping host",
      description: "Ping host and output results",
    },
    {
      command: "whois domain",
      description: "Get whois information for domains",
    },
    {
      command: "dig domain",
      description: "Get DNS information for domain",
    },
    {
      command: "dig -x host ",
      description: "Reverse lookup host",
    },
    {
      command: "wget file",
      description: "Download file",
    },
    {
      command: "wget -c file",
      description: "Continue a stopped download",
    },
    {
      command: "ctrl+c",
      description: "Halts the current command",
    },
    {
      command: "ctrl+z",
      description:
        "Stops the current command, resume with fg in the foreground or bg in the background",
    },
  
    {
      command: "ctrl+d ",
      description: "Logout the current session, similar to exit",
    },
    {
      command: "ctrl+w",
      description: "Erases one word in the current line",
    },
    {
      command: "ctrl+r",
      description: "Type to bring up a recent command",
    },
    {
      command: "ctrl+u",
      description: "Erases the whole line",
    },
  
    {
      command: "ps",
      description: "To display the currently working processes",
    },
    {
      command: "top",
      description: "Display all running process",
    },
    {
      command: "kill pid",
      description: "Kill the process with given pid",
    },
    {
      command: "killall proc",
      description: " Kill all the process named proc",
    },
  
    {
      command: "pkill pattern",
      description: "Will kill all processes matching the pattern",
    },
    {
      command: "bg",
      description:
        "List stopped or background jobs,resume a stopped job in the background",
    },
    {
      command: "fg",
      description: "Brings the most recent job to foreground",
    },
    {
      command: "fg n",
      description: "Brings job n to the foreground",
    },
  ];
  
  const allColors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
  
    "Bisque",
  
    "BlanchedAlmond",
  
    "CadetBlue",
  
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
  
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
  
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
  
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
  
    "MediumAquaMarine",
  
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
  
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
  
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
  
    "SeaGreen",
  
    "Sienna",
    "Silver",
  
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "Tan",
    "Teal",
  
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
  ];