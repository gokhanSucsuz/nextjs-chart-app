"use client";
import React from "react";
import World from "@svg-maps/world";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
const WorldMap = (props) => {
	return (
		<div className="h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<div className="p-5">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Mostly visited 5 Country
				</h5>
				<SVGMap
					map={World}
					locationClassName={(location, index) => {
						if (props.data[location.id] > 50) {
							return "crowded";
						} else if (props.data[location.id] > 50) {
							return "notCrowded";
						} else if (!props.data[location.id]) return "empty";
					}}
				/>
				<div className="flex flex-col gap-8">
					{Object.keys(props.data).map((item, index) => {
						return (
							<div key={index} className="flex items-center gap-4">
								<span>{item.toUpperCase()}</span>
								<div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
									<div
										className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
										style={{ width: props.data[item] + "%" }}>
										{props.data[item] + "%"}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default WorldMap;
