export type Member = {
  name: string;
  role: string;
  image?: string;
  github?: string;
  linkedin?: string;
};

export type MemberGroup = {
  group: string;
  members: Member[];
};

export const memberGroups: MemberGroup[] = [
  {
    group: "E-Board",
    members: [
      {
        name: "Jena Le",
        role: "President",
        image: "/assets/members/jena-le.jpg",
        linkedin: "https://www.linkedin.com/in/jenale114/",
      },
      {
        name: "Vincent Nguyen",
        role: "Vice President",
        image: "/assets/members/vincent-nguyen.jpg",
        linkedin: "https://www.linkedin.com/in/thevincinator/",
      },
      {
        name: "Ivy Zhou",
        role: "Project Manager",
        image: "/assets/members/ivy-zhou.jpg",
        linkedin: "https://www.linkedin.com/in/ivy-zhou-924a651b8/",
      },
      {
        name: "Nathan Li",
        role: "Project Manager",
        image: "/assets/members/nathan-li.jpg",
        linkedin: "https://www.linkedin.com/in/nathan-li-456a65336/",
      },
      { name: "Juhyun Sung", role: "Project Manager", image: "/assets/members/juhyun-sung.jpg" },
      {
        name: "Labi Neha",
        role: "Project Manager",
        image: "/assets/members/labi-neha.jpg",
        linkedin: "https://www.linkedin.com/in/labi-neha-b68456399/",
      },
    ],
  },
  {
    group: "Members",
    members: [
      { name: "Claire Yan", role: "Member", image: "/assets/members/claire-yan.jpg" },
      { name: "Justin Li", role: "Member", image: "/assets/members/justin-li.jpg" },
      { name: "Matthew Izaguirre", role: "Member", image: "/assets/members/matthew-izaguirre.jpg" },
      { name: "Viraj Kadakia", role: "Member", image: "/assets/members/viraj-kadakia.jpg" },
    ],
  },
  {
    group: "Alumni & Inactive Members",
    members: [{ name: "Yaelin Hough", role: "Alumni", image: "/assets/members/yaelin-hough.jpg" }],
  },
];
