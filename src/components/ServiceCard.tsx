import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <Card className="flex flex-col items-center text-center p-6 bg-brazil-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader className="pb-4">
        <div className="p-3 rounded-full bg-brazil-green text-brazil-white mb-4">
          <Icon size={32} />
        </div>
        <CardTitle className="text-xl font-semibold text-brazil-blue">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;