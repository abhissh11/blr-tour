interface Props {
  title: string;
  image: string;
  description: string;
  link: string;
}

export default function CardAttraction({
  title,
  image,
  description,
  link,
}: Props) {
  return (
    <a
      href={link}
      className="bg-white shadow hover:shadow-lg transition rounded-xl overflow-hidden"
    >
      <img src={image} className="h-48 w-full object-cover" alt={title} />
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </a>
  );
}
