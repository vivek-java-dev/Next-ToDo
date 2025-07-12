import EditTopicForm from "@/app/components/editTopicForm";

type EditTopicPageProps = {
  params: {
    id: string;
  };
};


const getTopicById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export default async function EditTopic({ params }: EditTopicPageProps) {
  const { id } = params;

  console.log("Topic ID:", id);
  const data = await getTopicById(id);

  if (!data || !data.topic) {
    return <div>Error loading topic</div>;
  }

  const { topic } = data;
  console.log(topic);
  

  return (
    <div className="flex flex-col items-center mt-12">
      <EditTopicForm
        id={id}
        title={topic.title}
        description={topic.description}
      />
    </div>
  );
}
