import { Routes, Route, HashRouter } from "react-router-dom";
import { Layout } from "../components/navigation/Layout";
import { HomePage } from "../pages/HomePage";
import { ModelPage } from "../pages/ModelPage";
import { StagePage } from "../pages/StagePage";
import { ActivityPage } from "../pages/ActivityPage";
import { MappingPage } from "../pages/MappingPage";
import { ChecklistPage } from "../pages/ChecklistPage";
import { EvidencePage } from "../pages/EvidencePage";
import { GlossaryPage } from "../pages/GlossaryPage";
import { MethodologyPage } from "../pages/MethodologyPage";
import { ReferencesPage } from "../pages/ReferencesPage";
import { LimitationsPage } from "../pages/LimitationsPage";

export function AppRouter() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/model" element={<ModelPage />} />
          <Route path="/stages/:stageSlug" element={<StagePage />} />
          <Route path="/stages/:stageSlug/:activitySlug" element={<ActivityPage />} />
          <Route path="/mapping" element={<MappingPage />} />
          <Route path="/checklist" element={<ChecklistPage />} />
          <Route path="/evidence" element={<EvidencePage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/references" element={<ReferencesPage />} />
          <Route path="/limitations" element={<LimitationsPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
