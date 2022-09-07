import React from "react";
import { About } from "../../views/examples/About";
import { Home } from "../../views/examples/Home";
import { Param } from "../../views/examples/Param";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "../../views/examples/NotFound";
import './Content.css'

export const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/param/:id" element={<Param />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </main>
)