type TagProps = {
  name: string;
};

type MapType = {
  [id: string]: string
};


const tagColor: MapType = {
  NextJs: 'bg-blue-300',
  Typescript: 'bg-blue-500',
  React: 'bg-sky-400',
  JavaScript: 'bg-yellow-200',
  Css: 'bg-purple-200',
  Bootstrap: 'bg-red-300',
  Tailwindcss: 'bg-green-300',
}


const Tag = (props: TagProps) => {
  return (
  <span className={`${tagColor[props.name]}px-2 mr-2 rounded text-black`}>
    {props.name}
  </span>
  )
};

export default Tag;
