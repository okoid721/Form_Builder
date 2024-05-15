import React from 'react';
import FormsList from '@/app/forms/FormList';
import { getUserForms } from '@/app/action/getUserForms';
import { InferSelectModel } from 'drizzle-orm';
import { forms as dbForms } from '@/db/schema';

type Props = {};

const page = async (props: Props) => {
  const forms: InferSelectModel<typeof dbForms>[] = await getUserForms();

  return (
    <>
      <FormsList forms={forms} />
    </>
  );
};

export default page;
